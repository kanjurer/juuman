from rest_framework import serializers
from .models import *


class ExpenseCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpenseCategory
        fields = '__all__'


class ExpenseEntrySerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField(method_name='get_category')
    amount = serializers.SerializerMethodField(method_name='get_amount')

    class Meta:
        model = ExpenseEntry
        fields = '__all__'

    def get_category(self, obj):
        return {'id': obj.id, 'name': obj.category.name}

    def get_amount(self, obj):
        return {'currency': '$', 'value': obj.amount}


class IncomeCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = IncomeCategory
        fields = '__all__'


class IncomeEntrySerializer(serializers.ModelSerializer):
    category = serializers.SerializerMethodField(method_name='get_category')
    amount = serializers.SerializerMethodField(method_name='get_amount')

    class Meta:
        model = IncomeEntry
        fields = '__all__'

    def get_category(self, obj):
        return {'id': obj.id, 'name': obj.category.name}

    def get_amount(self, obj):
        return {'currency': '$', 'value': obj.amount}
