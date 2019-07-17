from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth.views import login
from rest_framework import status
from .models import *
# from .email import send_welcome_email
from .forms import *
from django.http import HttpResponse, Http404,HttpResponseRedirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate


# DRF import settings
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import  *
from .serializer import ProfileSerializer,UserSerializer


# Create your views here.
# @login_required(login_url='/accounts/login/')
def home(request):
    #query all images by id

	profiles = Profile.get_all_profiles()
	current_user = request.user
	
    # user = User.objects.all()
    
	return render(request, 'home.html', {"current_user":current_user, "profiles":profiles })

def signup(request):
	if request.method == 'POST':
		form = SignUpForm(request.POST, request.FILES)
		if form.is_valid():
			user = form.save()
			user.refresh_from_db()
			user.save()
			username = form.cleaned_data.get('username')
			raw_password = form.cleaned_data.get('password1')
			user = authenticate(username =username, password=raw_password, form=form)
			login(request, user)
		return redirect('home_page')
	else:
		form = SignUpForm()
	return render(request, 'signup.html', {"form":form})		


@login_required(login_url='/accounts/login/')
def profile(request, profile_id):
	
	current_profile = Profile.objects.get(id=profile_id)
	images= Image.objects.filter(profile=current_profile)
	follows=Profile.objects.get(id=request.user.id)
	is_follow =False
	if follows.following.filter(id=profile_id).exists():
		is_follow=True	
	following=follows.following.all()
	followers=follows.user.followed_by.all()

	return render(request, 'profile/profile.html', {"current_profile":current_profile,"images":images, "follows":follows, "is_follow":is_follow, "following":following, "followers":followers})


class UserList(APIView):
    def get(self, request, format=None):
        user = User.objects.all()
        serializers = UserSerializer(user, many=True)
        return Response(serializers.data)

	
def postUser(self, request, format=None):
    serializers = UserSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)		
	

	
	
 
class ProfileList(APIView):
    def get(self, request, format=None):
        profile = Profile.objects.all()
        serializers = ProfileSerializer(profile, many=True)
        return Response(serializers.data)

def postProfile(self, request, format=None):
    serializers = ProfileSerializer(data=request.data)
    if serializers.is_valid():
        serializers.save()
        return Response(serializers.data, status=status.HTTP_201_CREATED)
    return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)		
   