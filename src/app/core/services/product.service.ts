import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductDetailDto } from '../models/product-detail.dto';
import { ProductCardDto } from '../models/product-card.dto';
import { CategoryDto } from '../models/category.dto';
import { BrandDto } from '../models/brand.dto';
import { PaginationResponseDto } from '../models/pagination-response.dto';
import { ProductFilterRequestDto } from '..//models/product-filter-request.dto';

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

  getBrandsByCategorySlug(categorySlug: string): Observable<BrandDto[]> {
    return this.http.get<BrandDto[]>(`${this.apiUrl}/brands/by-category/${categorySlug}`);
  }

  getProductsCatalog(filter: ProductFilterRequestDto): Observable<PaginationResponseDto<ProductCardDto>> {
    let params = new HttpParams();
    if (filter.categorySlug) params = params.set('categorySlug', filter.categorySlug);
    if (filter.brandName) params = params.set('brandName', filter.brandName);
    if (filter.searchTerm) params = params.set('searchTerm', filter.searchTerm);
    if (filter.minPrice != null) params = params.set('minPrice', filter.minPrice.toString());
    if (filter.maxPrice != null) params = params.set('maxPrice', filter.maxPrice.toString());
    if (filter.sortBy) params = params.set('sortBy', filter.sortBy);
    if (filter.sortOrder) params = params.set('sortOrder', filter.sortOrder);
    params = params.set('pageNumber', (filter.pageNumber ?? 1).toString());
    params = params.set('pageSize', (filter.pageSize ?? 12).toString());

    return this.http.get<PaginationResponseDto<ProductCardDto>>(`${this.apiUrl}/products`, { params });
  }

  getProductsByCategorySlug(slug: string, limit: number = 8): Observable<ProductCardDto[]> {
     const filter: ProductFilterRequestDto = { pageNumber: 1, pageSize: limit, categorySlug: slug };
     return this.getProductsCatalog(filter).pipe(map(response => response.items));
   }

   
}