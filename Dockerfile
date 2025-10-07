FROM python:3.12-slim

RUN adduser --disabled-password --gecos "" appuser

WORKDIR /app

COPY requirements.txt .

RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r requirements.txt

COPY . .

USER appuser

EXPOSE 8000

CMD ["gunicorn", "migraciones.wsgi:application", "--bind", "0.0.0.0:8000"]