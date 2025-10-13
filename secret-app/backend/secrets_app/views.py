import secrets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
import os
import redis

REDIS_HOST = os.environ.get("REDIS_HOST", "localhost")
REDIS_PORT = int(os.environ.get("REDIS_PORT", 6379))
r = redis.Redis(host=REDIS_HOST, port=REDIS_PORT, decode_responses=True)

def generate_unique_key(nbytes=12, max_tries=5):
    for _ in range(max_tries):
        token = secrets.token_urlsafe(nbytes)
        was_set = r.set(token, "", nx=True)
        if was_set:
            r.delete(token)
            return token
    return secrets.token_urlsafe(nbytes+4)

@api_view(['POST'])
def hide_secret(request):
    secret = request.data.get("secret")
    if not secret:
        return Response({"detail": "Se requiere 'secret'."}, status=status.HTTP_400_BAD_REQUEST)
    key = generate_unique_key()
    r.set(key, secret, nx=True)
    return Response({"key": key}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
def reveal_secret(request):
    key = request.data.get("key")
    if not key:
        return Response({"detail": "Se requiere 'key'."}, status=status.HTTP_400_BAD_REQUEST)
    try:
        value = r.execute_command("GETDEL", key)
    except redis.ResponseError:
        value = None
    if value is None:
        return Response({"detail": "Key no encontrada o ya usada."}, status=status.HTTP_404_NOT_FOUND)
    return Response({"secret": value}, status=status.HTTP_200_OK)
