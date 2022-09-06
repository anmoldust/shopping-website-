import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdisplayunitComponent } from './productdisplayunit.component';

describe('ProductdisplayunitComponent', () => {
  let component: ProductdisplayunitComponent;
  let fixture: ComponentFixture<ProductdisplayunitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdisplayunitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdisplayunitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
