from django.shortcuts import render

from . import data

# Create your views here.

def index(request) :
    context = {
        "experience"    : data.experience,
        "specialist"    : data.specialist,
    }
    return render(request, "index.html", context)