FROM python:3.12-alpine

RUN apk add --no-cache gcc musl-dev postgresql-dev bash

RUN adduser -D appuser

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

RUN chmod +x wait-for-it.sh

USER appuser

CMD ["./wait-for-it.sh", "db:5432", "--", "bash", "-c", "python manage.py migrate && python manage.py runserver 0.0.0.0:8000"]
