import { Component, HostListener, Inject, PLATFORM_ID, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ProductService } from '../../../core/services/product.service';
import { CategoryDto } from '../../../core/models/category.dto';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  isHidden = false;
  lastScrollTop = 0;

  private productService = inject(ProductService);
  mainCategories$: Observable<CategoryDto[]> = of([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.mainCategories$ = this.productService.getCategories().pipe(
      catchError(err => {
        console.error('Lỗi tải danh mục cho header:', err);
        return of([]);
      })
    );
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
      this.isScrolled = currentScroll > 50;
      if (currentScroll > this.lastScrollTop && currentScroll > 100) {
        this.isHidden = true;
      } else {
        this.isHidden = false;
      }
      this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    }
  }
}