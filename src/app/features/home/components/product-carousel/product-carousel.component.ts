import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductCardDto } from '../../../../core/models/product-card.dto'; // Import DTO

@Component({
  selector: 'app-product-carousel',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductCarouselComponent implements AfterViewInit {

  carouselProducts: ProductCardDto[] = [ // Sửa kiểu ở đây
    {
      productId: 1, name: 'iPhone 16 Pro Max 256GB | Chính hãng VN/A', slug: 'iphone-16-pro-max',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_2.png',
      price: 34990000, oldPrice: 38990000,
      averageRating: 4.9, reviewCount: 512
    },
    {
      productId: 5, name: 'Samsung Galaxy S25 Ultra 512GB', slug: 'samsung-galaxy-s25-ultra',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__4.png',
      price: 33990000, oldPrice: 37990000,
      averageRating: 4.8, reviewCount: 215
    },
    {
      productId: 6, name: 'MacBook Air M4 13-inch 16GB/512GB', slug: 'macbook-air-m4-13-inch',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_2__9_14_1.png',
      price: 32990000, oldPrice: 35990000,
      averageRating: 4.9, reviewCount: 150
    },
    {
      productId: 7, name: 'Tai nghe Sony WH-1000XM6 Wireless', slug: 'sony-wh-1000xm6',
      primaryImageUrl: 'https://www.sony.com.vn/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
      price: 8490000, oldPrice: 9490000,
      averageRating: 4.8, reviewCount: 302
    },
    {
      productId: 8, name: 'iPad Pro M4 11-inch Wifi 256GB', slug: 'ipad-pro-m4-11-inch',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_100_1_2__2_2.png',
      price: 28990000, oldPrice: 31990000,
      averageRating: 4.9, reviewCount: 180
    },
    {
      productId: 2, name: 'Samsung Galaxy Watch 7 Pro', slug: 'samsung-galaxy-watch-7-pro',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-l300_001_front_cream_240429.png',
      price: 11990000, oldPrice: 13990000,
      averageRating: 4.9, reviewCount: 95
    },
    {
      productId: 3, name: 'Laptop Gaming ASUS ROG Zephyrus G16 (2025)', slug: 'asus-rog-zephyrus-g16-2025',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_50__2_8.png',
      price: 55990000, oldPrice: 61990000,
      averageRating: 4.8, reviewCount: 55
    },
     {
      productId: 4, name: 'iPhone 15 128GB - Hồng', slug: 'iphone-15',
      primaryImageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb-color-pink-image_3_1.png',
      price: 18990000, oldPrice: 21990000,
      averageRating: 4.7, reviewCount: 1024
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const { register } = await import('swiper/element/bundle');
      register();
    }
  }
}