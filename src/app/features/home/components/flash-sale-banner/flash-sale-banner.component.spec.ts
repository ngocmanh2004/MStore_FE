import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashSaleBannerComponent } from './flash-sale-banner.component';

describe('FlashSaleBannerComponent', () => {
  let component: FlashSaleBannerComponent;
  let fixture: ComponentFixture<FlashSaleBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashSaleBannerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashSaleBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
