from django.urls import path
from . import views

urlpatterns = [
    path("expenses/", views.expense_list_api_view),
    path("expenses/<int:pk>/", views.expense_detail_api_view),
]
