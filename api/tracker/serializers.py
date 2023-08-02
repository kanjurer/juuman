from rest_framework import serializers
from .models import *


class ExpenseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseCategory
        fields = '__all__'


class ExpenseEntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseEntry
        fields = '__all__'
