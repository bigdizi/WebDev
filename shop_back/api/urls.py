from django.urls import path
from .views import ProductList, ProductDetail, CategoryList, CategoryDetail, CategoryProductsList

urlpatterns = [
    path('products/', ProductList.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetail.as_view(), name='product-detail'),
    path('categories/', CategoryList.as_view(), name='category-list'),
    path('categories/<int:pk>/', CategoryDetail.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', CategoryProductsList.as_view(), name='category-products-list'),
]
# shop_back/urls.py

from django.urls import path, include
from . import views

# api/urls.py

from django.urls import path
from .views import api_overview  # Other views

urlpatterns = [
    path('', api_overview, name='api-overview'),  # Other URL patterns
]
# api/urls.py

from django.urls import path, re_path
from django.views.generic import RedirectView
from . import views

urlpatterns = [
    path('', RedirectView.as_view(url='/api/products/', permanent=False)),
]
