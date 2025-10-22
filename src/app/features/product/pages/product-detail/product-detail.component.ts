import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MOCK_PRODUCT_DETAIL } from '../../../../core/mocks/product-detail.mock'; 
import { ProductGalleryComponent } from '../../../../shared/components/product-gallery/product-gallery.component';
import { ProductInfoComponent } from '../../../../shared/components/product-info/product-info.component';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { of } from 'rxjs';

type ProductDetail = typeof MOCK_PRODUCT_DETAIL;

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
  
  product: ProductDetail | null = null;
  activeTab: 'description' | 'specs' | 'reviews' = 'description';
  
  currentVariantImages: ProductDetail['variants'][0]['images'] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    
    of(MOCK_PRODUCT_DETAIL).subscribe(data => {
      this.product = data;
      
      if (data.variants.length > 0) {
        this.currentVariantImages = data.variants[0].images;
      }
      
      window.scrollTo(0, 0);
    });
  }

  onVariantChanged(images: ProductDetail['variants'][0]['images']): void {
    this.currentVariantImages = images;
  }
  
  onAddToCart(event: { variantId: number; quantity: number }): void {
    console.log('Thêm vào giỏ:', event);
  }

  selectTab(tab: 'description' | 'specs' | 'reviews'): void {
    this.activeTab = tab;
  }
}