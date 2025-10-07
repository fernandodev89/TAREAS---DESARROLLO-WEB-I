FROM python:3.12-slim

RUN adduser --disabled-password --gecos "" appuser

WORKDIR /app

COPY requirements.txt .

RUN apt-get update && apt-get install -y gcc libpq-dev \
    && pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt \
    && apt-get remove -y gcc \
    && apt-get autoremove -y \
    && rm -rf /var/lib/apt/lists/*

COPY . .

USER appuser

EXPOSE 8000

# Comando para correr Django
CMD ["gunicorn", "migraciones.wsgi:application", "--bind", "0.0.0.0:8000"]