import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroCarouselComponent } from '../../shared/components/hero-carousel/hero-carousel.component'; 
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductCarouselComponent } from './components/product-carousel/product-carousel.component';
import { CategoryProductGridComponent } from './components/category-product-grid/category-product-grid.component';
// --- THÊM IMPORT NÀY ---
import { FlashSaleBannerComponent } from './components/flash-sale-banner/flash-sale-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    HeroCarouselComponent,
    FeaturedProductsComponent,
    ProductCarouselComponent,
    CategoryProductGridComponent,
    FlashSaleBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent { }