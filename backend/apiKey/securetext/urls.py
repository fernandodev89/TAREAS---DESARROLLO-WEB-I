from django.urls import path
from . import views

urlpatterns = [
    path('hide/', views.hide_text, name='hide_text'),
    path('reveal/', views.reveal_text, name='reveal_text'),
]