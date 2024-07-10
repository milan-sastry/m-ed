from django.db import models
from django.contrib.auth.models import User



class TestApp(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)

  def __str__(self):
    return self.firstname + ' ' + self.lastname
  
class UserProfile(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  location = models.CharField(max_length=255)
  picture = models.ImageField(upload_to='user_images/', blank=True, null=True)

  def __str__(self):
    return self.user.username
  
  
  
class MentorProfile(models.Model):
  name = models.CharField(max_length=255)
  industry = models.CharField(max_length=255)
  location = models.CharField(max_length=255)
  picture = models.ImageField(upload_to='mentor_images/', blank=True, null=True)

  def __str__(self):
    return self.name

# Create your models here.
