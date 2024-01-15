import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../redux/actions/cart.actions';
import { selectItems } from 'src/app/redux/selectors/cart.selectors';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  count = 1;
  min = 1;
  max = 10;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store
  ) {}

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
    this.store.dispatch(
      addToCart({ payload: { item: this.data, count: this.count } })
    );
  }
}
