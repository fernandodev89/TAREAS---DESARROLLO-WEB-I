# Proyecto Django con Docker

Este proyecto utiliza **Docker** y **docker-compose** para levantar la aplicación Django junto con una base de datos PostgreSQL de forma rápida y segura.

---

## Requisitos
- Docker >= 24.0  
- Docker Compose >= 2.0  
- Git  

---

## Configuración de variables de entorno

Se utiliza un archivo `.env` para definir las credenciales de la base de datos y configuraciones de Django. Ejemplo de `.env`:

## PostgreSQL
POSTGRES_DB=mi_base
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_PORT=5432

## Django
DJANGO_SECRET_KEY=django-insecure-secret-key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1

# Ejecutar proyecto 
En la raiz del proyecto ejecutar: 
`docker compose build`

Para iniciar la aplicación y la base de datos, ejecuta:

`docker compose up`