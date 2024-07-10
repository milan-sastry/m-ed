from django.http import HttpResponse
from rest_framework.permissions import AllowAny, IsAuthenticated, IsAdminUser
from django.template import loader
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import MentorProfile
from .serializers import MentorProfileSerializer
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as auth_login, logout as auth_logout
from .serializers import UserSerializer
from rest_framework import status

def generate_username(first_name, last_name):
    username = first_name[0].lower() + last_name.lower()
    if User.objects.filter(username=username).exists():
        username = username + str(User.objects.filter(username__startswith=username).count())
    return username

@api_view(['POST'])
@permission_classes([AllowAny])
def register(request):
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')
    username = generate_username(first_name, last_name)
    email = request.data.get('email')
    password = request.data.get('password')
    
    if not first_name or not last_name or not password or not email:
        return Response({'error': 'Please provide name, password, and email'}, status=status.HTTP_400_BAD_REQUEST)
    user = User.objects.create_user(username=username, password=password, email=email,first_name=first_name,last_name=last_name)
    user.save()
    return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)

@api_view(['POST'])
@permission_classes([AllowAny])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(email=email, password=password)
    if user is not None:
        auth_login(request, user)
        session_id = request.session.session_key
        return Response({'message': 'Logged in successfully','session_id':session_id})
    else:
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

@api_view(['POST'])
def logout(request):
    auth_logout(request)
    return Response({'message': 'Logged out successfully'})

def testapp(request):
    template = loader.get_template('helloworld.html')
    return HttpResponse(template.render())

class MentorList(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        mentors = MentorProfile.objects.all()
        serializer = MentorProfileSerializer(mentors, many=True, context={'request': self.request})
        return Response(serializer.data)
    