FROM python:3.12-slim

RUN useradd -m appuser
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chown -R appuser:appuser /app
USER appuser

CMD ["gunicorn", "hw05_project.wsgi:application", "--bind", "0.0.0.0:8000"]

