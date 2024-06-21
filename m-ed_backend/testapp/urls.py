from django.urls import path
from . import views

urlpatterns = [
    path('testapp/', views.testapp, name='testapp'),path('', views.testapp, name='testapp')
]