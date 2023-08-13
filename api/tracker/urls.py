from django.urls import path
from . import views

# URLConfig
urlpatterns = [
    path("expense_category/", views.expense_category),
    path("income_category/", views.income_category),
    path("expense_entry/", views.expense_entry),
    path("income_entry/", views.income_entry),
]
