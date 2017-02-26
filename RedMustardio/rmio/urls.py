from django.conf.urls import url

from . import views

urlpatterns = [
	url(r'^$', views.index, name="index"),
	url(r'^apps$', views.apps, name="apps"),
	url(r'^audio$', views.audio, name="audio"),
	url(r'^about$', views.about, name="about"),
	url(r'^contact$', views.contact, name="contact"),
	url(r'^(?P<blog_id>[0-9]+)/$', views.blog, name="blog"),
]