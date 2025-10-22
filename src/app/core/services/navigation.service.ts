import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryDto, BrandDto } from '../models/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private apiUrl = 'https://localhost:7193/api';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>(`${this.apiUrl}/categories`);
  }

  getBrands(): Observable<BrandDto[]> {
    return this.http.get<BrandDto[]>(`${this.apiUrl}/brands`);
  }
}