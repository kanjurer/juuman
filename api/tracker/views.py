from django.http import HttpResponse
from .models import *
from rest_framework import routers, serializers, viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *


# Create your views here.


@api_view(['GET'])
def get_expenses(request):
    expenses = ExpenseEntry.objects.all()
    serializer = ExpenseEntrySerializer(expenses, many=True)
    return Response(serializer.data)
