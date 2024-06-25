from django.db import models

class TestApp(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)

  def __str__(self):
    return self.firstname + ' ' + self.lastname
  
class User(models.Model):
  name = models.CharField(max_length=255)
  email = models.EmailField()
  password = models.CharField(max_length=255)

  def __str__(self):
    return self.name

# Create your models here.
