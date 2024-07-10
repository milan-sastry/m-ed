from rest_framework import serializers
from django.contrib.auth.models import User
from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from .models import MentorProfile, UserProfile

class MentorProfileSerializer(serializers.ModelSerializer):
    picture = serializers.SerializerMethodField()

    class Meta:
        model = MentorProfile
        fields = ['name', 'industry', 'location', 'picture']

    def get_picture(self, obj):
        request = self.context.get('request')
        if obj.picture:
            return request.build_absolute_uri(obj.picture.url)
        return None
    
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email','first_name','last_name']

class UserProfileSerializer(serializers.ModelSerializer):
      picture = serializers.SerializerMethodField()
      user = UserSerializer(read_only=True)

      class Meta:
          model = UserProfile
          fields = '__all__'



