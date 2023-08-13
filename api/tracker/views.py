from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *


# category
@api_view(['GET', 'POST'])
def expense_category(request):
    if request.method == 'GET':
        data = ExpenseCategory.objects.all()
        serializer = ExpenseCategorySerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ExpenseCategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"expense_category": serializer.data},
                        headers={'Access-Control-Allow-Origin': 'http://localhost:3000'})


@api_view(['GET', 'POST'])
def income_category(request):
    if request.method == 'GET':
        data = IncomeCategory.objects.all()
        serializer = IncomeCategorySerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = IncomeCategorySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"income_category": serializer.data})


# entry
@api_view(['GET', 'POST'])
def expense_entry(request):
    if request.method == 'GET':
        data = ExpenseEntry.objects.all()
        serializer = ExpenseEntrySerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ExpenseEntrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        })


@api_view(['GET', 'POST'])
def income_entry(request):
    if request.method == 'GET':
        data = IncomeEntry.objects.all()
        serializer = IncomeEntrySerializer(data, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = IncomeEntrySerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({"income_entry": serializer.data}, headers={
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        })
