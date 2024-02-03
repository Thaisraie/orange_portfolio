from django.urls import path
from . import views

urlpatterns = [
    path("<int:id>", views.TagViews.as_view({
        "get":"get"
    }), name="tag_detail"),
    path("", views.TagViews.as_view({
        "post":"post",
        "get": "list"
    }), name="create_tag"),
    
]