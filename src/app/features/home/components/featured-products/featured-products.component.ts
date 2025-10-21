import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// --- TRẢ LẠI ĐƯỜNG DẪN GỐC ---
import { Product } from '../../../../core/models/product.model'; 
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
// ----------------------------
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent {
  
  mockProducts: Product[] = [
    {
      id: '1', name: 'iPhone 16 Pro Max 256GB | Chính hãng VN/A',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-16-pro-max_2.png',
      price: 34990000, oldPrice: 38990000, discountTag: '-11%',
      rating: 4.9, reviewCount: 512,
      savingAmount: 4000000, isGenuine: true, hasFastDelivery: true
    },
    {
      id: '5', name: 'Samsung Galaxy S25 Ultra 512GB',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25-ultra_3__4.png',
      price: 33990000, oldPrice: 37990000, discountTag: 'Mới nhất',
      rating: 4.8, reviewCount: 215,
      savingAmount: 4000000, isGenuine: true, hasFastDelivery: true
    },
    {
      id: '6', name: 'MacBook Air M4 13-inch 16GB/512GB',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_2__9_14_1.png',
      price: 32990000, oldPrice: 35990000, discountTag: 'Chip M4',
      rating: 4.9, reviewCount: 150,
      savingAmount: 3000000, isGenuine: true, hasFastDelivery: true
    },
    {
      id: '7', name: 'Tai nghe Sony WH-1000XM6 Wireless',
      imageUrl: 'https://www.sony.com.vn/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF',
      price: 8490000, oldPrice: 9490000, discountTag: 'Âm thanh Hi-Res',
      rating: 4.8, reviewCount: 302,
      savingAmount: 1000000, isGenuine: true, hasFastDelivery: true
    },
    {
      id: '8', name: 'iPad Pro M4 11-inch Wifi 256GB',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/f/r/frame_100_1_2__2_2.png',
      price: 28990000, oldPrice: 31990000, discountTag: 'Pro M4',
      rating: 4.9, reviewCount: 180,
      savingAmount: 3000000, isGenuine: true, hasFastDelivery: true
    },
    {
      id: '2', name: 'Samsung Galaxy Watch 7 Pro',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/m/sm-l300_001_front_cream_240429.png',
      price: 11990000, oldPrice: 13990000, discountTag: 'Mới 2025',
      rating: 4.9, reviewCount: 95,
      savingAmount: 2000000, isGenuine: true, hasFastDelivery: true
    },
    {
      id: '3', name: 'Laptop Gaming ASUS ROG Zephyrus G16 (2025)',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/t/e/text_ng_n_50__2_8.png',
      price: 55990000, oldPrice: 61990000, discountTag: 'RTX 5060',
      rating: 4.8, reviewCount: 55,
      savingAmount: 6000000, isGenuine: true, hasFastDelivery: true
    },
     {
      id: '4', name: 'iPhone 15 128GB - Hồng',
      imageUrl: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/i/p/iphone-15-plus-256gb-color-pink-image_3_1.png',
      price: 18990000, oldPrice: 21990000, discountTag: 'Giá tốt',
      rating: 4.7, reviewCount: 1024,
      savingAmount: 3000000, isGenuine: true, hasFastDelivery: true
    },
  ];
}