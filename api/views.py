from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import status, generics, mixins, viewsets
from django.contrib.auth import authenticate, login, get_user_model, logout
from django.conf import settings
from django.shortcuts import get_object_or_404
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from rest_framework.response import Response
from django.db import IntegrityError
from .models import User, Article, HeroBlock, PricingPlan, Feature
from .serializers import (
    UserSerializer,
    ArticleSerializer,
    HeroBlockSerializer,
    PricingPlanSerializer,
    FeatureSerializer,
)
from .authentication import JWTTokenAuthentication
import json
import jwt
from rest_framework.decorators import authentication_classes, permission_classes

"""         HERO BLOCK SECTION             """


class HeroBlockAPIView(
    mixins.RetrieveModelMixin, mixins.UpdateModelMixin, generics.GenericAPIView
):
    queryset = HeroBlock.objects.all()
    serializer_class = HeroBlockSerializer

    def get_object(self):
        return HeroBlock.objects.first()

    def get(self, request, *args, **kwargs):
        return self.retrieve(request, *args, **kwargs)

    def patch(self, request, *args, **kwargs):
        return self.partial_update(request, *args, **kwargs)

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


"""         ARTICLE HANDLING SECTION       """


class ArticleListCreateView(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    # authentication_classes = [JWTTokenAuthentication]
    # permission_classes = [IsAuthenticated]

    def create(self, request, *args, **kwargs):
        authorization_header = request.headers.get("Authorization")

        if not authorization_header:
            return Response({"error": "Missing authorization header"}, status=401)

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
            serializer.create(validated_data=data, username=user)

            return JsonResponse(serializer.data, status=201)

        return JsonResponse(serializer.errors, status=400)


class ArticleRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer

    def update(self, request, *args, **kwargs):
        article = self.get_object()
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

        serializer = ArticleSerializer(article, data=data)

        if serializer.is_valid():
            serializer.update(article, validated_data=data)

            return JsonResponse(serializer.data, status=200)

        return JsonResponse(serializer.errors, status=400)


"""      REGISTER/LOGIN SECTION       """


@csrf_exempt
def verify_jwt(request):
    """Func String"""

    authorization_header = request.headers.get("Authorization")

    if not authorization_header:
        return JsonResponse({"error": "Missing authorization header"}, status=401)

    token = authorization_header.split(" ")[1]
    try:
        decoded_token = jwt.decode(
            jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"]
        )
        username = decoded_token["user"]
        user = User.objects.get(username=username)

    except (jwt.exceptions.DecodeError, User.DoesNotExist):
        return JsonResponse({"authenticated": False}, status=401)

    return JsonResponse(
        {
            "authenticated": True,
            "is_superuser": user.is_superuser,
            "username": username,
        },
        status=200,
    )


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
                "authenticated": True,
                "is_superuser": user.is_superuser,
                "username": data["username"],
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


def logout_view(request):
    authorization_header = request.headers.get("Authorization")
    if not authorization_header:
        return JsonResponse({"error": "Missing authorization header"}, status=401)

    token = authorization_header.split(" ")[1]
    try:
        decoded_token = jwt.decode(
            jwt=token, key=settings.SECRET_KEY, algorithms=["HS256"]
        )
        username = decoded_token["user"]
        user = User.objects.get(username=username)
        logout(request)
        return JsonResponse({"message": "User logged out successfully"})

    except (jwt.exceptions.DecodeError, User.DoesNotExist):
        return JsonResponse({"error": "Error logging out the user"}, status=400)


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


"""
    Pricing Plan Section
"""

from .models import PricingPlan, Feature, SupportedSites
from .serializers import (
    PricingPlanSerializer,
    FeatureSerializer,
    SupportedSitesSerializer,
)


class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer


class SupportedSiteViewSet(viewsets.ModelViewSet):
    queryset = SupportedSites.objects.all()
    serializer_class = SupportedSitesSerializer


class PricingPlanViewSet(viewsets.ModelViewSet):
    queryset = PricingPlan.objects.all()
    serializer_class = PricingPlanSerializer
