from django.db import models


# Categories
class ExpenseCategory(models.Model):
    name = models.CharField(max_length=30)


class IncomeCategory(models.Model):
    name = models.CharField(max_length=30)


# Entries
class ExpenseEntry(models.Model):
    name = models.CharField(max_length=30)
    amount = models.DecimalField(decimal_places=2, max_digits=8)
    category = models.ForeignKey(ExpenseCategory, on_delete=models.CASCADE)
    date = models.DateField()


class IncomeEntry(models.Model):
    name = models.CharField(max_length=30)
    amount = models.DecimalField(decimal_places=2, max_digits=8)
    category = models.ForeignKey(IncomeCategory, on_delete=models.CASCADE)
    date = models.DateField()

