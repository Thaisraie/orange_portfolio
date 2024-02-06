from django.db import models
from s3direct.fields import S3DirectField
# Create your models here.




   

class Tag(models.Model):
    #portifolio = models.ForeignKey(Portfolio, on_delete=models.CASCADE, null=True)
    nome = models.CharField(max_length=55, null=False, blank=False)
    ativa = models.BooleanField(default=True)
    
    
class Portfolio(models.Model):
    titulo = models.CharField(max_length=255, null=False, blank=False)
    link = models.CharField(null=True, blank=True, max_length=450)
    descricao = models.CharField(max_length=1500)
    imagem = models.ImageField(upload_to="uploads/portifolio/imagens", blank=True, null=True, default=" ")
    tags = models.CharField(max_length=155, blank=True, null=True, default='')
    usuarioID = models.IntegerField(null=False, blank=False)
    criado_em = models.DateTimeField(auto_now_add=True)
    
    
    class Meta:
        db_table = "portfolios"
