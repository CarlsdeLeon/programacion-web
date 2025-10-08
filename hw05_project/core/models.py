from django.db import models

class Autor(models.Model):
    nombre = models.CharField(max_length=100)
    nacionalidad = models.CharField(max_length=50)

    def __str__(self):
        return self.nombre
    
class Libro(models.Model):
    titulo = models.CharField(max_length=200)
    fecha_publicacion = models.DateField()
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE, related_name="libros")

    def __str__(self):
        return self.titulo
    
class Editorial(models.Model):
    nombre = models.CharField(max_length=100)
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE, related_name="editoriales")

    def __str__(self):
        return self.nombre

class Resennia(models.Model):
    contenido = models.TextField()
    calificacion = models.IntegerField()
    libro = models.ForeignKey(Libro, on_delete=models.CASCADE, related_name="reseñas")

    def __str__(self):
        return f"Reseña de {self.libro.titulo}"

