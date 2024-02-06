from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import views, exceptions, status, permissions, viewsets
from .models import Portfolio, Tag
from .serializers import PortfolioSerializer, TagSerializer
from django.shortcuts import get_object_or_404, get_list_or_404

class PortfolioMixin(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer

class TagMixin(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
    
    
class TagViews(TagMixin):
    
    def list(self, request, *args, **kwargs):
        tags = Tag.objects.all()
        serializer = self.serializer_class(tags, many=True)
        
        if not tags:
            return Response("Nenhuma tag foi encontrada", status=status.HTTP_200_OK)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

    
    def get(self, request, *args, **kwargs):
        id = kwargs.get("id")
        
        if not id:
            return Response("Nenhum ID foi providênciado", status=status.HTTP_400_BAD_REQUEST)
        
        tag = get_object_or_404(Tag, id=id)
        
        serializer = self.serializer_class(tag)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kawrgs):
        data = request.data
        
        body = {
            "nome": data["nome"]
        }

        serializer = self.serializer_class(data=body)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response("Falha ao criar uma nova tag", status=status.HTTP_400_BAD_REQUEST)
    
class TagListView(TagMixin):
    
    def get(self, request, *args, **kwargs):
        tags = Tag.objects.all()
        serializer = self.serializer_class(tags, many=True)
        
        if not tags:
            return Response("Nenhuma tag foi encontrada", status=status.HTTP_200_OK)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

class PortfolioViews(PortfolioMixin):
    
    def delete(self, request, *args, **kwargs):
        portfolio = Portfolio.objects.get(id=kwargs.get("id"))
        
        if not portfolio:
            return Response("Portfolio não encontrado", status=status.HTTP_400_BAD_REQUEST)
        
        try:
            portfolio.delete()
            
            return Response("Portfolio deletado com sucesso", status=status.HTTP_200_OK)
        except:
            return Response("Algo deu errado ao tentar deletar o portfolio", status=status.HTTP_400_BAD_REQUEST)
        
        
    def update(self, request, *args, **kwargs):
        id = kwargs.get("id")
        data = request.data
        
        updateBody = {
            "titulo": data["titulo"],
            "link": data["link"],
            "descricao": data["descricao"],
            "tags": data["tags"]
        }
        
        try:
            Portfolio.objects.filter(id=id).update(**updateBody)
            
            return Response("Portfolio atualizado com sucesso", status.HTTP_200_OK)
            
        except:
            return Response("Falha ao tentar atualizar o portfolio", status=status.HTTP_400_BAD_REQUEST)
        
    def list(self, request, *args, **kwargs):
        portfolios = Portfolio.objects.all()
        serializer = self.serializer_class(portfolios, many=True)

        if not portfolios:
            return Response([], status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.data, status.HTTP_200_OK)
    
    def listByUserId(self, request, *args, **kwargs):
        usuarioId = kwargs.get("id")
        portfolios = Portfolio.objects.all().filter(usuarioID=usuarioId)
        serializer = self.serializer_class(portfolios, many=True)

        if not portfolios:
            return Response({"err": "Nenhum portfolio encontrado"})

        return Response(serializer.data, status.HTTP_200_OK)
        
    def get(self, request, *args, **kwargs):
        id = kwargs.get("id")
        
        if not id:
            return Response("Nenhum ID foi providênciado", status=status.HTTP_400_BAD_REQUEST)
        
        portfolio = get_object_or_404(Portfolio, id=id)
        
        serializer = self.serializer_class(portfolio)
        
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request, *args, **kawrgs):
        data = request.data
        
        body = {
            "titulo": data["titulo"],
            "link": data["link"],
            "descricao": data["descricao"],
            "imagem": data["imagem"],
            "usuarioID": data["usuarioID"],
            "tags": data["tags"]
        }

        serializer = self.serializer_class(data=body)
        
        if serializer.is_valid():
            serializer.save()
            
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        
        return Response("Falha ao criar um novo portfolio", status=status.HTTP_400_BAD_REQUEST)
    