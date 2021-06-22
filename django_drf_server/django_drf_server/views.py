from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import Http404
from .serializers import UserSerializer


class UserDetail(APIView):
    def get_object(self, pk):
        try: 
            return User.objects.get(pk=pk)
        except User.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        user = self.get_object(pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)