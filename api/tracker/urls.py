from django.urls import path
from . import views

# URLConfig
urlpatterns = [
    path("expense/", views.expense),
    path("income/", views.income),
    path("expense_category/", views.expense_category),
    path("income_category/", views.income_category),
]
