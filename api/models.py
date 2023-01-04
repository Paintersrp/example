from django.db import models
from django.contrib.auth.models import AbstractUser


class Expense(models.Model):
    name = models.CharField(max_length=255)
    amount = models.FloatField()
    date = models.DateField()
    one_time = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class User(AbstractUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username
