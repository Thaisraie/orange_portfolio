import os
from django.conf import settings
import json
from django.core.files.storage import default_storage
#from jwcrypto import jwt
from django.contrib import auth
from django.middleware import csrf
from rest_framework.response import Response
from rest_framework import status, response, views, viewsets, generics, exceptions as rest_exceptions, decorators as rest_decorators, permissions as rest_permissions
from rest_framework_simplejwt import views as jwt_views, tokens, serializers as jwt_serializers, exceptions as jwt_exceptions
# Create your views here.
from rest_framework_simplejwt.tokens import AccessToken
from .models import Usuario
from .serializers import UsuarioSerializer
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.contrib.auth.password_validation import validate_password
import boto3
from allauth.socialaccount.providers.google.views import GoogleOAuth2Adapter
from allauth.socialaccount.providers.oauth2.client import OAuth2Client



'''class GoogleLogin(SocialLoginView):
    adapter_class = GoogleOAuth2Adapter
    client_class = OAuth2Client'''

#criar classes de registro
class RegisterView(views.APIView):
    permission_classes = (rest_permissions.AllowAny,)#permite qualquer um acessar

    def post(self, request):
        
        data = request.data #pega os dados da requisição

        firstName = data.get('first_name') #acessando as chaves do dicionario
        lastName = data.get('last_name')
        email = data.get('email')
        password = data.get('password') 
        imagem = data.get("imagem") 
       
     

        if Usuario.objects.filter(email=email).exists():# email existente
            return Response({'email': 'Email já cadastrado'}, status=status.HTTP_400_BAD_REQUEST)                    
                    
        try:
            validate_password(password) #valida senha
        except ValidationError:
            return Response({'password': 'Senha inválida'}, status=status.HTTP_400_BAD_REQUEST)      
        
        '''usando o serializer para validar os dados
        serializer = UsuarioSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        '''

        Usuario.objects.handle_create(email=email, password = password, first_name = firstName, last_name = lastName, imagem=imagem)

        return Response({"success": "Usuário Cadastrado"}, status=status.HTTP_201_CREATED)

#Login de usuário
class LoginView(views.APIView):
    permission_classes = (rest_permissions.AllowAny,)

    def post(self, request):
        
        data = request.data

        email = data.get('email')
        password = data.get('password')

        if not password or not email:
            return Response({'error': 'Por favor informe email e senha'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user = auth.authenticate(email=email, password=password)
            
            if user is not None:
                tokens = get_user_token(user)  #gerar os tokens do usuário
                auth.login(request, user)       #autenticar na sessão
                response = Response()           #instância da resposta

                response.set_cookie(            #passando parâmetros para o bojeto
                    key=settings.SIMPLE_JWT["AUTH_COOKIE"],
                    value=tokens["access_token"],       #valor do cookie será o token de acesso
                    expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"],
                    secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                    httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                    samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"]
                )

                response.set_cookie(        
                key=settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"],
                value=tokens["refresh_token"],          #valor do cookie será o token de atualização
                expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"],
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"]

            )

                response.data = tokens      #passando os dados do token para a resposta

                response["X-CSRFToken"] = csrf.get_token(request)   #proteção contra ataques

                return response             #retornando a resposta http

            else:
                return Response({"err": "error trying authenticating"}, status.HTTP_400_BAD_REQUEST)#falha na autenticação

        except:
            return Response({"err": "something went wrong"}, status.HTTP_400_BAD_REQUEST)#erro inesperado


# classe para checar autenticação get
class check_authenticate(views.APIView):
    def get(self,request,format=None):
        user = self.request.user   #referencia a solicitação atual
        
        try:
            is_user_autenticated = user.is_user_autenticated

            if is_user_autenticated:
                return Response({"is_user_autenticated": True}, status.HTTP_200_OK)
            
            else:
                return Response({"is_user_autenticated": False}, status.HTTP_400_BAD_REQUEST)
        except:
            return Response({"err": "something went wrong"}, status.HTTP_400_BAD_REQUEST)#Erro inesperado

#classe para logout        
class LogOut(views.APIView):
    
    def post(self, request, *args, **kwargs):
        try:
            auth.logout(request)    #deslogar da sessão          

            response = Response()              #instância da resposta do django REST
            response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE"])
            response.delete_cookie(settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"])
            response['X-CSRFToken'] = csrf.get_token(request)       #proteção contra ataques
            response.data = {"success": "O usuario teve sua sessão encerrada com sucesso"}  #resposta como digcionário json

            return response
        except:
            return Response({"err": "Algo deu errado"}, status.HTTP_400_BAD_REQUEST)#Erro inesperado
        

#autenticação via requisição get
@rest_decorators.api_view(["GET"])
@rest_decorators.permission_classes([rest_permissions.IsAuthenticated])

#view em django rest
def user_view(request):
    try:
        user = Usuario.objects.get(id=request.user.id)# buscar o usuário pelo id e atribuir a user
    except:
       return Response({"err": "Failed to get user"}, status.HTTP_400_BAD_REQUEST) # falha ao obter usuário
    

    serializer = UsuarioSerializer(user)  #objeto obtido na busca instânciado na classe serializer(serializers.py)
                                        #serializer do django rest convertendo objeto do db em json
    return Response(serializer.data, status.HTTP_200_OK)

#######Classes para tokens#######
            
#Obter token de acesso com base no token de refresh
class cookie_tok_ref_serializer(jwt_serializers.TokenRefreshSerializer):
    refresh = None

    def validate(self, attrs):
        attrs['refresh'] = self.context['request'].COOKIES.get(settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"])#obtendo o token de atualização

        if attrs['refresh']:        #se o token de atualização existir
            return super().validate(attrs) #retorna o token de acesso
        else:
            token = jwt_exceptions.InvalidToken('No valid token found in cookie')
            return token

# Token para manter o usuário logado
class cokkie_tok_ref_view(jwt_views.TokenRefreshView):
    serializer_class = cookie_tok_ref_serializer

    def finalize_response(self, request, response, *args, **kwargs):
        if response.data.get("refresh"):
            response.set_cookie(
                key=settings.SIMPLE_JWT["AUTH_COOKIE_REFRESH"],
                value=response.data["refresh"],
                expires=settings.SIMPLE_JWT["REFRESH_TOKEN_LIFETIME"],
                secure=settings.SIMPLE_JWT["AUTH_COOKIE_SECURE"],
                httponly=settings.SIMPLE_JWT["AUTH_COOKIE_HTTP_ONLY"],
                samesite=settings.SIMPLE_JWT["AUTH_COOKIE_SAMESITE"]
            )
            del response.data["refresh"]

        response["X-CSRFToken"] = request.COOKIES.get("csrftoken")

        return super().finalize_response(request, response, *args, **kwargs)
    
#receber usuário, criar token de atualização e retornar dicionário
def get_user_token(user):
    refresh = tokens.RefreshToken.for_user(user)   #u = parâmetro usuário

    return {
            "refresh_token": str(refresh),
            "access_token": str(refresh.access_token)
        }
    
    
class ReturnUser(views.APIView):
    permission_classes = [rest_permissions.AllowAny]
    serializer_class = UsuarioSerializer
    def get(self, request, *args, **kwargs):
        id = kwargs.get("id")
        
        
        user = Usuario.objects.get(id=id)
        
        if not user:
            return Response("O Usuario de ID "+id+" não pode ser encontrado!")
        
        
        
        userResp = self.serializer_class(user)
        return Response(userResp.data)
    
    
class ReturnUserByToken(views.APIView):
    permission_classes = [rest_permissions.AllowAny]
    serializer_class = UsuarioSerializer
    
    def get(self, request, *args, **kwargs):
        userId = request.user.id
        
        imagem = ""
        
        user = Usuario.objects.get(id=userId)
        
        if not user:
            return Response("O Usuario de ID "+id+" não pode ser encontrado!")
        
        
        
        userResp = self.serializer_class(user)
        return Response(userResp.data)
        
       


'''session = boto3.Session(
    aws_access_key_id= 'AKIA4PB4PZZDXIONDVWU',
    aws_secret_access_key = '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'
)

class image():
    
    def sendImage(image, file_name):
        boto3.Session(
            aws_access_key_id= 'AKIA4PB4PZZDXIONDVWU',
            aws_secret_access_key = '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'
        )

        client = boto3.client('s3', 
                            aws_access_key_id= 'AKIA4PB4PZZDXIONDVWU',
                            aws_secret_access_key = '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',
                            region_name='us-east-1')
        client.upload_file(file_name, 'orange-challenge-uploads', image)
        
    def UploadImage(name,image):
        filename = name#name+'_picture.jpg'
        imagedata = image
        s3 = boto3.resource('s3')
        try:
            object = s3.Object('orange-challenge-uploads', filename)
            object.put(ACL='public-read',Body=imagedata,Key=filename)
            return True
        except Exception as e:
            return e'''
    
class UpdateUserImage(views.APIView):
    
    def patch(self, request, *args, **kwargs):
        user = request.user.id
        body = {
            "imagem": request.FILES["imagem"]
        }
        
        
        response = Usuario.objects.filter(id=user).update(**body)
        return Response(response)
    
    
class GetAllUsers(views.APIView):
    permission_classes = [rest_permissions.AllowAny]
    serializer_class = UsuarioSerializer
    
    def get(self, request, *args, **kwargs):
        users = Usuario.objects.all()
        serializer = self.serializer_class(users, many=True)
        
        if not users:
            return Response([], status=status.HTTP_404_NOT_FOUND)
        
        return Response(serializer.data, status=status.HTTP_200_OK)