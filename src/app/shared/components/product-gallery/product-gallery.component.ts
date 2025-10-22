import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageDto } from '../../../core/models/product-detail.dto'; // Import DTO

@Component({
  selector: 'app-product-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnChanges {
  // Sửa kiểu dữ liệu Input
  @Input() images: ImageDto[] = [];

  selectedImageUrl: string = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && this.images?.length > 0) {
      // ImageDto có imageUrl
      this.selectedImageUrl = this.images[0].imageUrl;
    }
  }

  selectImage(imageUrl: string): void {
    this.selectedImageUrl = imageUrl;
  }
}