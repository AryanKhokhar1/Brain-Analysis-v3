from django.shortcuts import render,HttpResponse
from rest_framework.views import APIView
# Create your views here.

class MyAPIView(APIView):

    def get(request):
        return HttpResponse("It's GET Response")
    