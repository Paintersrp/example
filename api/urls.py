from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from .views import (
    ArticleListCreateView,
    ArticleRetrieveUpdateDestroyView,
    HeroBlockAPIView,
    PricingPlanViewSet,
    FeatureViewSet,
    SupportedSiteViewSet,
)


router = DefaultRouter()
router.register(r"pricing_plans", PricingPlanViewSet)
router.register(r"features", FeatureViewSet)
router.register(r"supported_sites", SupportedSiteViewSet)


urlpatterns = [
    path("", include(router.urls)),
    path("heroblock/", HeroBlockAPIView.as_view(), name="hero-block"),
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
