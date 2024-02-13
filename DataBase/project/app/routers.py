from rest_framework import routers
from .views import StudentViewSet, AdminLogViewSet, StuComplaintViewSet


# Routers provide an easy way of automatically determining the URL conf.
sturegirouter = routers.DefaultRouter()
sturegirouter.register(r'', StudentViewSet)



# Routers provide an easy way of automatically determining the URL conf.
# Admin Raouting
adminlogrouter = routers.DefaultRouter()
adminlogrouter.register(r'', AdminLogViewSet)


# Student Compalaint
stucomprouter = routers.DefaultRouter()
stucomprouter.register(r'comp', StuComplaintViewSet)