from django.db import models

# Create your models here.
class Autor(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    nacionality = models.CharField(max_length=50)
