FROM python:3.12-slim

RUN useradd -m appuser
WORKDIR /app

COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh

RUN apt-get update && apt-get install -y \
    libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chown -R appuser:appuser /app
USER appuser

EXPOSE 8000

CMD ["gunicorn", "hw05_project.wsgi:application", "--bind", "0.0.0.0:8000"]

