import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
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
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {
      this.product$ = this.productService.getProductBySlug(slug).pipe(
        tap(data => {
          if (data?.variants?.length > 0) {
            this.currentVariantImages = data.variants[0].images;
          }
          this.errorLoadingProduct = false;
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
    }
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