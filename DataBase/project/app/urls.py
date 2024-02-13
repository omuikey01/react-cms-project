from django.urls import path, include
from .routers import sturegirouter, adminlogrouter, stucomprouter

urlpatterns = [
    path('student/', include(sturegirouter.urls)),
    # path('student/<str:email>/', include(sturegirouter.urls)),
    path('admin/', include(adminlogrouter.urls)),
    path('complaint/', include(stucomprouter.urls)),
    # path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
