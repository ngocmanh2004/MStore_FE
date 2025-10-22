import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card.component';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../core/services/product.service';
import { ProductCardDto } from '../../../../core/models/product-card.dto';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, RouterModule],
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  private productService = inject(ProductService);
  featuredProducts$: Observable<ProductCardDto[]> = of([]);
  loadingError = false;

  ngOnInit(): void {
    console.log('FeaturedProductsComponent OnInit');
    this.featuredProducts$ = this.productService.getFeaturedProducts().pipe(
      catchError(err => {
        console.error('Lỗi tải sản phẩm nổi bật:', err);
        this.loadingError = true;
        return of([]);
      })
    );
  }
}