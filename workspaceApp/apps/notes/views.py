from django.shortcuts import render

# Create your views here.

def notes(request):
    template_name = 'notes/notes.html'
    context = {}
    return render(request, template_name, context)
