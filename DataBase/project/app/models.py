from django.db import models


class StuRegistration(models.Model):
    fullname = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)
    dropdown = models.CharField(max_length=50)
    gender = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=100)


class AdminLogin(models.Model) :
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    

class StudentComplaint(models.Model):
    stuid = models.IntegerField()
    subject = models.CharField(max_length=200)
    datetime = models.CharField(max_length=200)
    queryexplain = models.CharField(max_length=500)
    ans = models.CharField(max_length=800, blank=True )
