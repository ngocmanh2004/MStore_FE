import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, ParamMap } from '@angular/router'; // Thêm ParamMap
import { Observable, of, switchMap } from 'rxjs'; // Thêm switchMap
import { catchError, tap } from 'rxjs/operators';
import { ProductService } from '../../../../core/services/product.service';
import { ProductDetailDto, ImageDto } from '../../../../core/models/product-detail.dto';
import { ProductGalleryComponent } from '../../../../shared/components/product-gallery/product-gallery.component';
import { ProductInfoComponent } from '../../../../shared/components/product-info/product-info.component';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductGalleryComponent,
    ProductInfoComponent,
    ProductCardComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  product$: Observable<ProductDetailDto | null> = of(null);
  errorLoadingProduct: boolean = false;
  activeTab: 'description' | 'specs' | 'reviews' = 'description';
  currentVariantImages: ImageDto[] = [];

  ngOnInit(): void {
    console.log('ProductDetailComponent OnInit'); // LOG 1: Component có chạy OnInit không?

    this.product$ = this.route.paramMap.pipe(
      tap(params => console.log('ParamMap changed:', params.get('slug'))), // LOG 2: Slug có thay đổi không?
      switchMap((params: ParamMap) => {
        const slug = params.get('slug');
        console.log('SwitchMap triggered with slug:', slug); // LOG 3: switchMap có chạy không?
        if (slug) {
          this.errorLoadingProduct = false;
          console.log('Calling getProductBySlug for:', slug); // LOG 4: Có gọi service không?
          return this.productService.getProductBySlug(slug).pipe(
            tap(data => {
              console.log('Received product data:', data); // LOG 5: Dữ liệu trả về là gì?
              if (data?.variants?.length > 0) {
                this.currentVariantImages = data.variants[0].images;
              }
              window.scrollTo(0, 0);
            }),
            catchError(err => {
              console.error('Lỗi khi tải sản phẩm:', err);
              this.errorLoadingProduct = true;
              return of(null);
            })
          );
        } else {
          console.error('Không tìm thấy slug sản phẩm!');
          this.errorLoadingProduct = true;
          return of(null);
        }
      })
    );
  }

  onVariantChanged(images: ImageDto[]): void {
    this.currentVariantImages = images;
  }

  onAddToCart(event: { variantId: number; quantity: number }): void {
    console.log('Thêm vào giỏ:', event);
  }

  selectTab(tab: 'description' | 'specs' | 'reviews'): void {
    this.activeTab = tab;
  }
}