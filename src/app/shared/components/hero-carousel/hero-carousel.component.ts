import { Component, CUSTOM_ELEMENTS_SCHEMA, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core'; // 1. Import thêm AfterViewInit
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroCarouselComponent implements AfterViewInit { // 2. Implement AfterViewInit

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

  }

  async ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {
      const { register } = await import('swiper/element/bundle');

      register();
    }
  }
}