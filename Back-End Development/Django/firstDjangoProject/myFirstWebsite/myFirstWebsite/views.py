from django.http import HttpResponse
from django.shortcuts import render
def index(request):
    return render(request,'index.html')

def about(request):
    return HttpResponse("Welcome to about page")

def chatcount():
    def about(request):
        return HttpResponse("Chat count ")

def spaceremove(request):
    return HttpResponse("Space remove")

def newlineremove(request):
    return HttpResponse("New line remove")

def capfirst(request):
    return HttpResponse("caps first")

def analyze(request):
    # Get the text
    djtext = request.GET.get('text', 'default')
    removepunc=request.GET.get('removepunc','off')

    if removepunc == "on":
        punctuations = '''!()-[]{};:'"\,<>./?@#$%^&*_~'''
        analyzed = ""
        for char in djtext:
            if char not in punctuations:
                analyzed = analyzed + char
        params = {'purpose': 'Removed Punctuations', 'analyzed_text': analyzed}
        return render(request, 'analyze.html', params)

    else:
        return HttpResponse('Error')

