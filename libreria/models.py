from django.db import models

# Create your models here.
class Autor(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    nacionality = models.CharField(max_length=50)

class Libro(models.Model):
    titulo = models.CharField(max_length=100)
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

class Capitulo(models.Model):
    titulo = models.CharField(max_length=100)
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE)

class Seccion(models.Model):
    nombre = models.CharField(max_length=100)
    capitulo = models.ForeignKey(Capitulo, on_delete=models.CASCADE)