from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, viewsets
from django.contrib.auth import authenticate, login, get_user_model
from django.contrib.auth.hashers import make_password, check_password
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse, HttpResponse
from rest_framework.response import Response
from django.db import IntegrityError
from .models import User, Article
from .serializers import UserSerializer, ArticleSerializer
import json
import jwt

"""      ARTICLE HANDLING SECTION       """


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


@csrf_exempt
def article_list(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return JsonResponse({"articles": serializer.data})


@csrf_exempt
def article_detail(request, pk):
    article = get_object_or_404(Article, pk=pk)
    serializer = ArticleSerializer(article)

    return JsonResponse(serializer.data)


@csrf_exempt
def article_delete(request, pk):
    article = get_object_or_404(Article, pk=pk)
    article.delete()
    return HttpResponse(status=204)


@csrf_exempt
def article_create(request):
    if request.method == "POST":
        authorization_header = request.headers.get("Authorization")

        if not authorization_header:
            return JsonResponse({"error": "Missing authorization header"}, status=401)

        token = authorization_header.split(" ")[1]
        username = jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"])
        user = User.objects.get(username=username["user"])

        form_data = request.POST
        title = form_data.get("title")
        content = form_data.get("content")
        tags = form_data.get("tags")

        if request.FILES.get("image"):
            image = request.FILES.get("image")
        else:
            image = None

        data = {"title": title, "content": content, "tags": tags, "image": image}

        if isinstance(data.get("tags"), str):
            tags = data["tags"].split(",")
            data["tags"] = [{"name": tag.strip()} for tag in tags]

        serializer = ArticleSerializer(data=data)

        if serializer.is_valid():
            article = serializer.create(validated_data=data, username=user)

            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
def article_update(request, pk):
    article = get_object_or_404(Article, pk=pk)
    data = json.loads(request.body)

    serializer = ArticleSerializer(article, data=data)

    if serializer.is_valid():
        serializer.save()
        return JsonResponse(serializer.data)

    return JsonResponse(serializer.errors, status=400)


"""      REGISTER/LOGIN SECTION       """


@csrf_exempt
def verify_jwt(request):
    """Func String"""

    authorization_header = request.headers.get("Authorization")

    if not authorization_header:
        return JsonResponse({"error": "Missing authorization header"}, status=401)

    token = authorization_header.split(" ")[1]

    if not jwt.decode(jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"]):
        return JsonResponse({"authenticated": False}, status=401)

    else:
        return JsonResponse({"authenticated": True})


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
        token = jwt.encode(
            {"user": data["username"]}, settings.SECRET_KEY, algorithm="HS256"
        )
        response = JsonResponse(
            {
                "jwt": token,
                "isAuthenticated": user.is_authenticated,
                "isSuperUser": user.is_superuser,
            }
        )
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
