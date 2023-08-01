from django.http import HttpResponse


# Create your views here.


def get_hello(request):
    x = 1
    y = 2
    return HttpResponse("Hello Kanav!")
