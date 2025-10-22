import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { ProductService } from '../../../../core/services/product.service';
import { ProductCardDto } from '../../../../core/models/product-card.dto';
import { BrandDto } from '../../../../core/models/brand.dto';
import { PaginationResponseDto } from '../../../../core/models/pagination-response.dto';
import { ProductFilterRequestDto } from '../../../../core/models/product-filter-request.dto';
import { Observable, of, combineLatest, switchMap, catchError, debounceTime } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private productService = inject(ProductService);

  productsResponse$: Observable<PaginationResponseDto<ProductCardDto> | null> = of(null);
  brands$: Observable<BrandDto[]> = of([]);
  loadingError = false;

  currentCategorySlug: string | null = null;
  selectedBrand: string | null = null;   // ✅ chỉ 1 thương hiệu duy nhất
  selectedPriceRange: string = 'all';
  currentPage = 1;

  priceRanges = [
    { value: 'all', label: 'Tất cả giá', min: null, max: null },
    { value: '<10m', label: 'Dưới 10 triệu', min: null, max: 10000000 },
    { value: '10m-20m', label: 'Từ 10 - 20 triệu', min: 10000000, max: 20000000 },
    { value: '>20m', label: 'Trên 20 triệu', min: 20000000, max: null }
  ];

  ngOnInit(): void {
    this.productsResponse$ = combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).pipe(
      debounceTime(50),
      switchMap(([paramMap, queryMap]) => {
        this.loadingError = false;
        window.scrollTo(0, 0);

        this.currentCategorySlug = paramMap.get('categorySlug');
        this.selectedBrand = queryMap.get('brand') || null;
        this.selectedPriceRange = queryMap.get('price') || 'all';
        this.currentPage = +(queryMap.get('page') || 1);

        // Lấy danh sách thương hiệu
        if (this.currentCategorySlug) {
          this.brands$ = this.productService.getBrandsByCategorySlug(this.currentCategorySlug)
            .pipe(catchError(() => of([])));
        } else {
          this.brands$ = this.productService.getBrands()
            .pipe(catchError(() => of([])));
        }

        // Tạo bộ lọc và lấy sản phẩm
        const filter = this.createFilterObject();
        return this.productService.getProductsCatalog(filter).pipe(
          catchError(err => {
            console.error('Lỗi tải danh sách sản phẩm:', err);
            this.loadingError = true;
            return of(null);
          })
        );
      })
    );
  }

  createFilterObject(): ProductFilterRequestDto {
    const filter: ProductFilterRequestDto = {
      pageNumber: this.currentPage,
      pageSize: 12,
      categorySlug: this.currentCategorySlug
    };

    if (this.selectedBrand) {
      filter.brandName = this.selectedBrand;
    }

    const priceRange = this.priceRanges.find(r => r.value === this.selectedPriceRange);
    if (priceRange) {
      filter.minPrice = priceRange.min;
      filter.maxPrice = priceRange.max;
    }

    return filter;
  }

  applyFilters(): void {
    this.currentPage = 1;
    this.updateUrlQueryParams();
  }

  goToPage(page: number, totalPages: number | undefined): void {
    if (!totalPages || page < 1 || page > totalPages) return;
    this.currentPage = page;
    this.updateUrlQueryParams(false);
  }

  clearFilters(): void {
    this.selectedBrand = null;
    this.selectedPriceRange = 'all';
    this.currentPage = 1;
    this.updateUrlQueryParams();
  }

  private updateUrlQueryParams(resetPage = true): void {
    const queryParams: any = {
      brand: this.selectedBrand || null,
      price: this.selectedPriceRange !== 'all' ? this.selectedPriceRange : null,
      page: resetPage ? null : (this.currentPage > 1 ? this.currentPage : null)
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true
    });
  }
}
