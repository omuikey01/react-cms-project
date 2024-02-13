from rest_framework import serializers
from .models import StuRegistration, AdminLogin, StudentComplaint


# Serializers define the API representation.
class StuRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = StuRegistration
        fields = "__all__"

class AdminLoginSerializer(serializers.ModelSerializer) :
    class Meta:
        model = AdminLogin
        fields = "__all__"


class StudentComplaintSerializer(serializers.ModelSerializer):
    class Meta :
        model = StudentComplaint
        fields = "__all__"