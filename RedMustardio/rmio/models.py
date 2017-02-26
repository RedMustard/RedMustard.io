from django.db import models

# Create your models here.
class Blog(models.Model):
	name = models.CharField(max_length=100)
	tagline = models.TextField()

	def __str__(self):
		return self.name


class Author(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()

	def __str__(self):
		return self.name


class Entry(models.Model):
	blog = models.ForeignKey(Blog, on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	body_text = models.TextField()
	pub_date = models.DateField()
	author = models.ManyToManyField(Author)

	def __str__(self):
		return self.title


class Application(models.Model):
	application_type = models.CharField(max_length=25)
	thumbnail = models.ImageField(upload_to='apps')
	description = models.CharField(max_length=100)

	def __str__(self):
		return self.application_type


class WebApp(models.Model):
	name = models.CharField(max_length=100)
	thumbnail = models.ImageField(upload_to='webapp')
	description = models.CharField(max_length=300)
	application = models.ForeignKey(Application, on_delete=models.CASCADE)
	release_date = models.DateField()

	def __str__(self):
		return self.name


class MobileApp(models.Model):
	name = models.CharField(max_length=100)
	thumbnail = models.ImageField(upload_to='mobileapp')
	description = models.CharField(max_length=300)
	application = models.ForeignKey(Application, on_delete=models.CASCADE)
	release_date = models.DateField()

	def __str__(self):
		return self.name
		

class AudioApp(models.Model):
	name = models.CharField(max_length=100)
	thumbnail = models.ImageField(upload_to='audioapp')
	description = models.CharField(max_length=300)
	application = models.ForeignKey(Application, on_delete=models.CASCADE)
	release_date = models.DateField()

	def __str__(self):
		return self.name


# class Albums(models.Model):
# 	title = models.CharField(max_length=50)
# 	artist = models.CharField(max_length=100)
# 	release_date = models.DateField()
# 	songs = models.ForeignKey(Songs, on_delete=models.CASCADE)


# class Songs(models.Model):
# 	album = models.ForeignKey(Albums, on_delete=models.CASCADE)
# 	title = models.CharField(max_length=50)
# 	artist = models.CharField(max_length=100)
# 	release_date = models.DateField()

	# def __str__(self):
	# 	return self.title


