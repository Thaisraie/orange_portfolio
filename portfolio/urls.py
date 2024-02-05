from django.urls import path
from . import views

urlpatterns = [    
    path("", views.PortfolioViews.as_view({
        "post": "post"
    }), name="portfolio"),
    path("<int:id>", views.PortfolioViews.as_view({
        "get": "get",
        "patch": "update",
        "delete": "delete"
    }), name="product_detail"),
    path("todos", views.PortfolioViews.as_view({
        "get": "list"
    })),
    path("usuario/<int:id>", views.PortfolioViews.as_view({
        "get": "listByUserId"
    }))
    
]