import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../redux/actions/cart.actions';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  count: number = 1;
  min: number = 1;
  max: number = 10;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {}

  public changeCount(prefix: string): void {
      switch (prefix) {
        case 'inc':
          if (this.count < this.max) {
            this.count++;
          }
          break;
        case 'dec':
          if (this.count > this.min) {
            this.count--;
          }
          break;
      }
  }

  public addItem() {
    this.store.dispatch(addToCart({ payload: {item: this.data, count: this.count} }));
  }
}
