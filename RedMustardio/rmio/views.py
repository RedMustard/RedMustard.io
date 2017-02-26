from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
	# template = loader.get_template('rmio/index.html')
	# context = {'home_page' }
	return render(request, 'rmio/index.html')

def apps(request):
	return render(request, 'rmio/apps.html')

def audio(request):
	return render(request, 'rmio/audio.html')

def about(request):
	return render(request, 'rmio/about.html')

def contact(request):
	return render(request, 'rmio/contact.html')

def blog(request, blog_id):
	return HttpResponse("You're looking at blog %s." % blog_id)