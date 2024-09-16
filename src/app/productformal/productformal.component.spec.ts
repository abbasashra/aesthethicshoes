import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductformalComponent } from './productformal.component';

describe('ProductformalComponent', () => {
  let component: ProductformalComponent;
  let fixture: ComponentFixture<ProductformalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductformalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductformalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
