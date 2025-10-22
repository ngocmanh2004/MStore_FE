import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { ProductService } from '../../../../core/services/product.service';
import { CategoryDto } from '../../../../core/models/category.dto';
import { BrandDto } from '../../../../core/models/brand.dto';
import { ProductCardDto } from '../../../../core/models/product-card.dto';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

interface CategoryGroupViewModel {
  category: CategoryDto;
  brands: BrandDto[];
  products$: Observable<ProductCardDto[]>;
}

@Component({
  selector: 'app-category-product-grid',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './category-product-grid.component.html',
  styleUrls: ['./category-product-grid.component.scss']
})
export class CategoryProductGridComponent implements OnInit {

  private productService = inject(ProductService);
  categoryGroups$: Observable<CategoryGroupViewModel[]> = of([]);
  loadingError = false;

  ngOnInit(): void {
    this.categoryGroups$ = this.productService.getCategories().pipe(
      // Bỏ dòng map filter ở đây
      switchMap(rootCategories => {
        if (!rootCategories || rootCategories.length === 0) {
           return of([]);
        }
        const groupObservables = rootCategories.map(category => {
          const products$ = this.productService.getProductsByCategorySlug(category.slug, 8).pipe(
             catchError(err => {
               console.error(`Lỗi tải sản phẩm cho ${category.name}:`, err);
               return of([]);
             })
          );
          const mockBrands: BrandDto[] = [
             { brandId: 1, name: 'Apple' },
             { brandId: 2, name: 'Samsung' },
             { brandId: 3, name: 'Xiaomi' }
           ];

          return of({
            category: category,
            brands: mockBrands,
            products$: products$
          } as CategoryGroupViewModel);
        });
        return forkJoin(groupObservables);
      }),
      catchError(err => {
        console.error('Lỗi tải danh mục:', err);
        this.loadingError = true;
        return of([]);
      })
    );
  }
}