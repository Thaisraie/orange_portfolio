
from django import urls
from django.contrib import admin
from django.urls import path, include

from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

schema_view = get_schema_view(
    openapi.Info(
        title="Orange API",
        default_version='v1',
        description="API desenvolvida para o hackthon da Orange",
        contact=openapi.Contact(email="felipesousa458999@gmail.com"),
    ),
    public=True,
    permission_classes=(permissions.AllowAny,),
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/usuarios/', include("autenticacao.urls")),
    path('api/v1/tags/', include("portfolio.tagUrls")),
    path('api/v1/portfolios/', include("portfolio.urls")),
    path('s3direct/', include('s3direct.urls')),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('accounts/', include('allauth.urls')),
    #path('auth/', include('rest_framework_social_oauth2.urls')),
]
