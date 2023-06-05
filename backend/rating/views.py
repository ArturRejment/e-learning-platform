from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.permissions import IsAuthenticated

from rating.models import Rating
from rating.serializers import RatingSerializer

# Create your views here.

class RatingViewSet(viewsets.GenericViewSet, mixins.CreateModelMixin):
    queryset = Rating.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = RatingSerializer