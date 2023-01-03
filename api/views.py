from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from .models import Expense
from .serializers import ExpenseSerializer
import json


@csrf_exempt
def expense_list_api_view(request):

    if request.method == "GET":
        expenses = Expense.objects.all()
        print(expenses)
        serializer = ExpenseSerializer(expenses, many=True)
        return JsonResponse({"expenses": serializer.data})

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = ExpenseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()

            return JsonResponse({"expense": serializer.data})

        return JsonResponse({"error": serializer.errors})


@csrf_exempt
def expense_detail_api_view(request, pk):

    expense = get_object_or_404(Expense, pk=pk)

    if request.method == "DELETE":
        expense.delete()
        return JsonResponse({"message": "Expense deleted"})

    elif request.method == "PUT":
        data = json.loads(request.body)
        serializer = ExpenseSerializer(expense, data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse({"expense": serializer.data})

        return JsonResponse({"error": serializer.errors})
