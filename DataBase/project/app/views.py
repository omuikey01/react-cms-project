from django.shortcuts import render
from rest_framework import viewsets
from .models import StuRegistration, AdminLogin, StudentComplaint
from .serializers import StuRegisterSerializer, AdminLoginSerializer, StudentComplaintSerializer
from django.http import HttpResponse
# Create your views here.



# ViewSets define the view behavior.
class StudentViewSet(viewsets.ModelViewSet):
    queryset = StuRegistration.objects.all()
    serializer_class = StuRegisterSerializer


class AdminLogViewSet(viewsets.ModelViewSet) :
    queryset = AdminLogin.objects.all()
    serializer_class = AdminLoginSerializer
    
    response = HttpResponse()
    # Set the Access-Control-Allow-Origin header to allow requests from any origin
    response["Access-Control-Allow-Origin"] = "*"
    # You can also set other CORS headers as needed, depending on your requirements
    response["Access-Control-Allow-Methods"] = "GET, POST, OPTIONS"
    response["Access-Control-Allow-Headers"] = "Content-Type, Authorization"

class StuComplaintViewSet(viewsets.ModelViewSet):
    queryset = StudentComplaint.objects.all()
    serializer_class = StudentComplaintSerializer