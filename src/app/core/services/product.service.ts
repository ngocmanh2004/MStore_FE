import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDetailDto } from '../models/product-detail.dto';
import { ProductCardDto } from '../models/product-card.dto';
import { CategoryDto } from '../models/category.dto';
import { BrandDto } from '../models/brand.dto';
import { PaginationResponseDto } from '../models/pagination-response.dto'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://localhost:7193/api'; 

  constructor(private http: HttpClient) { }

  getProductBySlug(slug: string): Observable<ProductDetailDto> {
    return this.http.get<ProductDetailDto>(`${this.apiUrl}/products/${slug}`);
  }

  getFeaturedProducts(): Observable<ProductCardDto[]> {
    return this.http.get<ProductCardDto[]>(`${this.apiUrl}/products/featured`);
  }

  getCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.apiUrl}/categories`);
  }

  getBrands(): Observable<BrandDto[]> {
    return this.http.get<BrandDto[]>(`${this.apiUrl}/brands`);
  }

  getProductsByCategorySlug(slug: string, limit: number = 8): Observable<ProductCardDto[]> {
     return this.http.get<PaginationResponseDto<ProductCardDto>>(`${this.apiUrl}/products?categorySlug=${slug}&pageSize=${limit}`)
       .pipe(map(response => response.items));
   }

}