from django.db import models

# Create your models here.


# Categories

class BaseCategory(models.Model):
    class Meta:
        abstract = True

    name = models.CharField(max_length=30)


class ExpenseCategory(BaseCategory):
    pass


class IncomeCategory(BaseCategory):
    pass


# Entries

class BaseEntry(models.Model):
    class Meta:
        abstract = True

    name = models.CharField(max_length=30)
    amount = models.DecimalField(decimal_places=5, max_digits=5)
    category = models.ForeignKey(BaseCategory, on_delete=models.CASCADE)


class ExpenseEntry(BaseEntry):
    category = models.ForeignKey(ExpenseCategory, on_delete=models.CASCADE)


class ExpenseEntry(BaseEntry):
    category = models.ForeignKey(IncomeCategory, on_delete=models.CASCADE)
