from django.shortcuts import render

# Create your views here.

def calculator(request):
    template_name = 'calculator/calculadora1.html'
    context = {}
    return render(request, template_name, context)
