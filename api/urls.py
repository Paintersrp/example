from django.urls import path
from . import views
from .views import ArticleListCreateView, ArticleRetrieveUpdateDestroyView

urlpatterns = [
    path("articles/", ArticleListCreateView.as_view(), name="article-list-create"),
    path(
        "articles/<int:pk>/",
        ArticleRetrieveUpdateDestroyView.as_view(),
        name="article-detail-update-delete",
    ),
    path("verify/", views.verify_jwt, name="verify-jwt"),
    path("login/", views.login_view, name="login"),
    path("logout/", views.logout_view, name="logout"),
    path("register/", views.register, name="register"),
    path("update-profile/", views.update_profile, name="update-profile"),
]
