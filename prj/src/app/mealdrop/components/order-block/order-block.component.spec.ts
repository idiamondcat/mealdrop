import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderBlockComponent } from './order-block.component';

describe('OrderBlockComponent', () => {
  let component: OrderBlockComponent;
  let fixture: ComponentFixture<OrderBlockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderBlockComponent],
    });
    fixture = TestBed.createComponent(OrderBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
