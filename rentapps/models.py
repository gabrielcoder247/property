from django.db import models
from django.contrib.auth.models import User
from datetime import datetime as dt


    

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True,null=True, related_name='signup') # user.profile 
    pub_date = models.DateField(auto_now_add=True)
    username = models.CharField(max_length=30, null=True)
    email = models.EmailField(unique=True, null=True)
    fname = models.CharField(max_length=30, null=True)
    lname = models.CharField(max_length=30, null=True)
    location = models.CharField(max_length=50, null=True)
    occupation = models.CharField(max_length=60, null=True)
    org_name = models.CharField(max_length=60, null=True)
    phone_num = models.CharField(max_length=30, null=True)
    profile_photo = models.ImageField(upload_to = 'profile/') 
    bio = models.TextField(max_length=255, null=True) 

    def __str__(self):
        return self.username
    


    def find_profile(cls,first_name):
        profile = Profile.objects.filter_by_name(name__icontains=first_name).all()

        return profile


    def save_user(self):
         self.save()

    def delete_profile(self):
        self.delete()     

        
    @classmethod
    def get_all_profiles(cls):
        profile= Profile.objects.all()
        return profile
     


  


class Billing(models.Model):

    firstname = models.CharField(max_length=30, null=True)
    lastname = models.CharField(max_length=30, null=True)
    email = models.EmailField(unique=True, null=True)
    state = models.CharField(max_length=100, null=True)
    country = models.CharField(max_length=100, null=True)
    postal_code = models.CharField(max_length=20, null=True)
    pub_date = models.DateField(auto_now_add=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
  


    @classmethod
    def get_all(cls):
        bills = Billing.objects.all()
        return bills


    def save_bills(self):
        self.save()


    def delete_bills(self):
        self.delete()

    @classmethod
    def update_bills(cls, id, update):
        update_bills =cls.objects.filter(id=id).update(bills = update)

        return update_bills



    def __str__(self):
        return self.email



    


    


    
