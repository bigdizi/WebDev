from rest_framework import generics
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer

class ProductList(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetail(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryDetail(generics.RetrieveAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class CategoryProductsList(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        """
        This view should return a list of all the products
        for the category as determined by the category_id portion of the URL.
        """
        category_id = self.kwargs['id']
        return Product.objects.filter(category_id=category_id)
# shop_back/views.py

from django.http import HttpResponse

def home(request):
    return HttpResponse("Welcome to the Shop API!")
# api/views.py
from django.http import JsonResponse

def api_overview(request):
    api_urls = {
        'List': '/api/products/',
        'Detail View': '/api/products/<int:id>/',
        'List Categories': '/api/categories/',
        'Detail View for Category': '/api/categories/<int:id>/',
        'List Products by Category': '/api/categories/<int:id>/products/',
    }
    return JsonResponse(api_urls)
