from rest_framework import serializers
from .models import User, Article, Tag, HeroBlock, Feature, PricingPlan, SupportedSites
from PIL import Image


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class HeroBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroBlock
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ["name"]


class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source="author.username")
    tags = TagSerializer(many=True)
    image = serializers.ImageField(required=False, allow_null=True)

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "content",
            "author",
            "created_at",
            "updated_at",
            "tags",
            "image",
        ]

    def validate_image(self, image):
        if image is None:
            return image

        max_size = 1024 * 1024

        if image.size > max_size:
            raise serializers.ValidationError("Image file too large ( > 1mb )")

        try:
            Image.open(image).verify()

        except Exception:
            raise serializers.ValidationError("Invalid image format")

        return image

    def create(self, validated_data, username):
        author = User.objects.get(username=username)
        validated_data["author"] = author
        tags_data = validated_data.pop("tags", [])
        article = Article.objects.create(**validated_data)

        for tag_data in tags_data:
            tag, created = Tag.objects.get_or_create(**tag_data)
            article.tags.add(tag)

        return article

    def update(self, instance, validated_data):
        instance.title = validated_data.get("title", instance.title)
        instance.content = validated_data.get("content", instance.content)
        instance.image = validated_data.get("image", instance.image)
        instance.author = User.objects.get(username=instance.author)
        tags = validated_data.get("tags")

        if tags:
            tag_objs = []

            for tag_dict in tags:
                tag_name = tag_dict.get("name")
                tag, created = Tag.objects.get_or_create(name=tag_name)
                tag_objs.append(tag)

            instance.tags.set(tag_objs)

        Article.objects.filter(id=17).update()
        instance.save()

        return instance


"""
    Pricing Data
"""


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = "__all__"


class SupportedSitesSerializer(serializers.ModelSerializer):
    class Meta:
        model = SupportedSites
        fields = "__all__"


class PricingPlanSerializer(serializers.ModelSerializer):
    features = FeatureSerializer(many=True, read_only=True)
    supportedsites = SupportedSitesSerializer(many=True, read_only=True)

    class Meta:
        model = PricingPlan
        fields = "__all__"
