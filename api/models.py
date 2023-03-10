from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    username = models.CharField(max_length=255, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username


class Tag(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.SET_DEFAULT, default=11)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField(Tag, related_name="articles")
    image = models.ImageField(blank=True, null=True)


class HeroBlock(models.Model):
    title = models.CharField(max_length=200)
    heading = models.TextField()
    text = models.TextField()
    buttonText = models.CharField(max_length=50)


"""
    Pricing Plans
"""


class Feature(models.Model):
    detail = models.CharField(max_length=100)

    def __str__(self):
        return self.detail


class SupportedSites(models.Model):
    site = models.CharField(max_length=100)

    def __str__(self):
        return self.site


class PricingPlan(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.ImageField(upload_to="pricing_images")
    features = models.ManyToManyField(Feature, related_name="features")
    supportedsites = models.ManyToManyField(
        SupportedSites, related_name="supportedsites"
    )
    bestFor = models.CharField(max_length=100, default="Tits")
    guarantee = models.CharField(max_length=100, default="Tits")

    def __str__(self):
        return self.title
