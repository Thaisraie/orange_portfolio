from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractUser, PermissionsMixin
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password

# Create your models here.
class UsuarioManager(BaseUserManager):
    
    def create_user(self, first_name, last_name,  email, password, imagem):

        if not email:
            raise ValueError('Usuários devem ter um email válido')        
        elif not first_name:
            raise ValueError('Usuários devem ter um primeiro nome válido')
        elif not last_name:
            raise ValueError('Usuários devem ter um último nome válido')
        elif not password:
            raise ValueError('Usuários devem ter uma senha válida')
        

        email = self.normalize_email(email)
        user = self.model(first_name = first_name, email=email, last_name=last_name, username=email, imagem=imagem)
        user.set_password(password)
       

        user.save()

        return user
    
    
    def handle_create(self, first_name, last_name,  email, password, imagem):
        user = self.create_user(first_name, last_name, email, password, imagem)
        user.is_staff = True
        user.is_active = True

        user.save()

        return user
   


class Usuario(AbstractUser, PermissionsMixin):
    
    email= models.EmailField(unique=True, max_length=255, blank = False) #blank = False não permite que o campo fique vazio
    first_name = models.CharField(max_length=30, unique=False, blank = False)
    last_name = models.CharField(max_length=30, unique=False, blank = False)
    password = models.CharField(max_length=255, blank= False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    imagem = models.ImageField(upload_to="uploads/usuarios/imagens", blank=True, null=True)
  

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['password', 'first_name', 'last_name'] #campos obrigatórios

    objects = UsuarioManager()
    
    
    def __str__(self):
        return self.email
    
    class Meta:
        db_table = "usuarios"
