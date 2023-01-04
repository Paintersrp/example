from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse
from rest_framework.response import Response
from django.db import IntegrityError
from .models import Expense, User
from .serializers import ExpenseSerializer, UserSerializer
import json
import jwt


@csrf_exempt
@api_view(["PATCH", "GET"])
def expense_list_api_view(request):
    """Func String"""

    if request.method == "GET":
        expenses = Expense.objects.all()
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
    """Func String"""

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


@csrf_exempt
def verify_jwt(request):
    """Func String"""

    authorization_header = request.headers.get("Authorization")
    if not authorization_header:
        return JsonResponse({"error": "Missing authorization header"}, status=401)

    token = authorization_header.split(" ")[1]
    test2 = jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"])
    print(test2)

    if not jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"]):
        return JsonResponse({"authenticated": False}, status=401)
    else:
        return JsonResponse({"authenticated": True})

    # try:
    #     test = jwt.decode(token, settings.SECRET_KEY)
    #     test2 = jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"])
    #     print(test2)

    # except jwt.ExpiredSignatureError:
    #     return JsonResponse({"authenticated": False}, status=401)

    # except jwt.DecodeError:
    #     return JsonResponse({"authenticated": False}, status=401)

    # return JsonResponse({"authenticated": True})


@csrf_exempt
def login_view(request):
    """Func String"""

    if request.method == "GET":
        all_users = User.objects.all()
        serializer = UserSerializer(all_users, many=True)

        return JsonResponse({"users": serializer.data})

    if request.method == "POST":
        data = json.loads(request.body)

        if not data["username"] or not data["password"]:
            return JsonResponse({"error": "Missing required fields"}, status=400)

        user = authenticate(
            request, username=data["username"], password=data["password"]
        )

        if user is None:
            return JsonResponse({"error": "Invalid username or password"}, status=401)

        login(request, user)
        token = jwt.encode({"id": user.id}, settings.SECRET_KEY, algorithm="HS256")
        response = JsonResponse({"jwt": token})
        response.set_cookie(key="jwt", value=token, httponly=True)

        return response

    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)


@csrf_exempt
def register(request):
    """Func String"""

    if request.method == "POST":
        data = json.loads(request.body)

        if not data["username"] or not data["email"] or not data["password"]:
            return JsonResponse({"error": "Missing required fields"}, status=400)

        if len(data["password"]) < 6:
            return JsonResponse(
                {"error": "Password must be at least 6 characters"}, status=400
            )

        try:
            user = User.objects.create_user(
                data["username"], data["email"], data["password"]
            )

        except IntegrityError:
            return JsonResponse(
                {"error": "Username or email already exists"}, status=400
            )

        return JsonResponse({"message": "User registered successfully"})

    else:
        return JsonResponse({"error": "Invalid request method"}, status=405)


@api_view(["PATCH", "GET"])
@permission_classes([IsAuthenticated])
def update_profile(request):

    User = get_user_model()
    user = get_object_or_404(User, pk=request.user.id)
    serializer = UserSerializer(user, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
