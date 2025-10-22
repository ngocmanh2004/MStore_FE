import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable, of } from 'rxjs';

interface MainCategory {
  slug: string;
  name: string;
  children: { slug: string; name: string }[];
}

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

  mainCategories$: Observable<MainCategory[]> = of([]);

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.mainCategories$ = of([
      { slug: 'dien-thoai', name: 'Điện thoại', children: [] },
      { slug: 'laptop', name: 'Laptop', children: [] },
      { slug: 'may-tinh-bang', name: 'Máy tính bảng', children: [] },
      { slug: 'phu-kien', name: 'Phụ kiện', children: [] }
    ]);
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
