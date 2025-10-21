import { Component, Input } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common'; 
import { Product } from '../../../core/models/product.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule, DecimalPipe], 
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product; 
  addToCart() {
    console.log('Đã thêm sản phẩm:', this.product.name);
  }
}