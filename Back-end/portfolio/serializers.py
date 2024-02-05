from rest_framework import serializers
from .models import Portfolio, Tag


class PortfolioSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Portfolio
        fields= "__all__"
        
        
class TagSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Tag
        fields = "__all__"