from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView, TokenVerifyView
from . import views

urlpatterns = [
    
    path("signup", views.RegisterView.as_view(), name="signup"),
    path("login", views.LoginView.as_view(), name="login"),
    path("logout", views.LogOut.as_view(), name="logout"),
    path("usuario/<int:id>", views.ReturnUser.as_view()),
    path("update/image", views.UpdateUserImage.as_view()),
    path("usuario", views.ReturnUserByToken.as_view()),
    path("todos", views.GetAllUsers.as_view())
   
    
]


'''path("user", views.user),
    path("refresh-token", views.CookieTokenRefreshView.as_view()),
    path("logout", views.LogoutView.as_view()),'''