import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Import các DTO cần thiết từ core/models
import { ProductVariantDto, AvailableOptionDto, ImageDto } from '../../../core/models/product-detail.dto';

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

  // Sửa kiểu dữ liệu của Input này
  @Input() allVariants: ProductVariantDto[] = [];
  // Sửa kiểu dữ liệu của Input này
  @Input() availableOptions: AvailableOptionDto[] = [];

  // Sửa kiểu dữ liệu của Output này
  @Output() variantChanged = new EventEmitter<ImageDto[]>();
  @Output() addToCart = new EventEmitter<{ variantId: number; quantity: number }>();

  selectedOptions: { [key: string]: string } = {};
  // Sửa kiểu dữ liệu của biến này
  currentVariant: ProductVariantDto | null = null;
  quantity: number = 1;

  ngOnInit(): void {
    if (this.availableOptions.length > 0) {
      this.availableOptions.forEach(option => {
        // Option name giờ lấy từ DTO
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
      // Logic tìm variant giữ nguyên, vì DTO vẫn có selectedOptions
      return variant.selectedOptions.every(opt =>
        this.selectedOptions[opt.name] === opt.value
      );
    });

    this.currentVariant = foundVariant || null;

    if (this.currentVariant) {
      this.quantity = 1;
      // Emit đúng kiểu ImageDto[]
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
    // DTO có stockQuantity là number, nên so sánh === 0 là đúng
    return potentialVariant ? potentialVariant.stockQuantity === 0 : true;
  }

  changeQuantity(amount: number): void {
    this.quantity += amount;
    if (this.quantity < 1) this.quantity = 1;
    // currentVariant.stockQuantity là number, so sánh trực tiếp
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