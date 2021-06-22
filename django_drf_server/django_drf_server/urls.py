from django.contrib import admin
from django.urls import path, include
from .views import UserDetail

urlpatterns = [
    path('admin/', admin.site.urls),

    # Djoser module urls for managing users and authentication
    path('api/v1/', include('djoser.urls')),
    path('api/v1/', include('djoser.urls.authtoken')),
    path('api/v1/', include('djoser.urls.jwt')),

    # user details 
    path('api/v1/user/<int:pk>/', UserDetail.as_view(), name='userdetail'),

    # quiz urls
    path('api/v1/', include('quiz.urls')),
]
