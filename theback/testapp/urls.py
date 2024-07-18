from django.urls import path
from . import views

urlpatterns = [
    path('testapp/', views.testapp, name='testapp'),
    path('', views.testapp, name='testapp'),
    path('mentors/', views.MentorList.as_view(), name='mentors'),

    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('check_user_exists/', views.check_user_exists, name='check_user_exists'),

]