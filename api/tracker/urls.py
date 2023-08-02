from django.urls import path
from . import views

# URLConfig
urlpatterns = [
    path("expenses/", views.get_expenses),
]
