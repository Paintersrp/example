from django.urls import path, include
from rest_framework import routers
from . import views
from .views import (
    article_list,
    article_create,
    article_detail,
    article_update,
    article_delete,
)

router = routers.DefaultRouter()
router.register(r"articles", views.ArticleViewSet, "article")

urlpatterns = [
    path("drf/", include(router.urls)),
    path("articles/", article_list, name="article-list"),
    path("articles/create/", article_create, name="article-create"),
    path("articles/<int:pk>/", article_detail, name="article-detail"),
    path("articles/<int:pk>/update/", article_update, name="article-update"),
    path("articles/<int:pk>/delete/", article_delete, name="article-delete"),
    path("verify/", views.verify_jwt, name="verify-jwt"),
    path("login/", views.login_view, name="login"),
    path("register/", views.register, name="register"),
    path("update-profile/", views.update_profile, name="update-profile"),
]
