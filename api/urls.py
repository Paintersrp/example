from django.urls import path
from . import views

urlpatterns = [
    path("expenses/", views.expense_list_api_view),
    path("expenses/<int:pk>/", views.expense_detail_api_view),
    path("verify/", views.verify_jwt, name="verify-jwt"),
    path("login/", views.login_view, name="login"),
    path("register/", views.register, name="register"),
    path("update-profile/", views.update_profile, name="update-profile"),
]