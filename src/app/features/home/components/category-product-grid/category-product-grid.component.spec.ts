import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryProductGridComponent } from './category-product-grid.component';

describe('CategoryProductGridComponent', () => {
  let component: CategoryProductGridComponent;
  let fixture: ComponentFixture<CategoryProductGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryProductGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
