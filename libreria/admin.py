from django.contrib import admin

from .models import Libro,Autor, Capitulo,Seccion
# Register your models here.

@admin.register(Libro)
class LibroAdmin(admin.ModelAdmin):
	pass


@admin.register(Autor)
class AutorAdmin(admin.ModelAdmin):
	pass
@admin.register(Capitulo)
class CapituloAdmin(admin.ModelAdmin):
	pass
@admin.register(Seccion)
class SeccionAdmin(admin.ModelAdmin):
	pass