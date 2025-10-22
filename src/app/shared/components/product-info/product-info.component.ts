import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MOCK_PRODUCT_DETAIL } from '../../../core/mocks/product-detail.mock';

type ProductVariant = typeof MOCK_PRODUCT_DETAIL.variants[0];
type ProductOption = typeof MOCK_PRODUCT_DETAIL.availableOptions[0];

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
  @Input() productName: string = '';
  @Input() averageRating: number = 0;
  @Input() reviewCount: number = 0;
  
  @Input() allVariants: ProductVariant[] = [];
  @Input() availableOptions: ProductOption[] = [];

  @Output() addToCart = new EventEmitter<{ variantId: number; quantity: number }>();
  @Output() variantChanged = new EventEmitter<ProductVariant['images']>();

  selectedOptions: { [key: string]: string } = {};
  currentVariant: ProductVariant | null = null;
  quantity: number = 1;

  ngOnInit(): void {
    if (this.availableOptions.length > 0) {
      this.availableOptions.forEach(option => {
        this.selectedOptions[option.name] = option.values[0];
      });
      this.findAndSetCurrentVariant();
    }
  }

  selectOption(optionName: string, value: string): void {
    this.selectedOptions[optionName] = value;
    this.findAndSetCurrentVariant();
  }

  findAndSetCurrentVariant(): void {
    const foundVariant = this.allVariants.find(variant => {
      return variant.selectedOptions.every(opt => 
        this.selectedOptions[opt.name] === opt.value
      );
    });

    this.currentVariant = foundVariant || null;
    
    if (this.currentVariant) {
      this.quantity = 1;
      this.variantChanged.emit(this.currentVariant.images);
    } else {
      this.variantChanged.emit([]);
    }
  }

  isOptionOutOfStock(optionName: string, value: string): boolean {
    const tempOptions = { ...this.selectedOptions, [optionName]: value };

    const potentialVariant = this.allVariants.find(variant => {
      return variant.selectedOptions.every(opt => 
        tempOptions[opt.name] === opt.value
      );
    });
    
    return potentialVariant ? potentialVariant.stockQuantity === 0 : true;
  }

  changeQuantity(amount: number): void {
    this.quantity += amount;
    if (this.quantity < 1) this.quantity = 1;
    if (this.currentVariant && this.quantity > this.currentVariant.stockQuantity) {
      this.quantity = this.currentVariant.stockQuantity;
    }
  }

  onAddToCart(): void {
    if (this.currentVariant && this.quantity > 0) {
      this.addToCart.emit({
        variantId: this.currentVariant.variantId,
        quantity: this.quantity
      });
      alert(`Đã thêm: ${this.currentVariant.sku} (x${this.quantity})`);
    }
  }
}