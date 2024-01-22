import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectItems,
  selectRestaurant,
  selectTotal,
} from './selectors/cart.selectors';
import * as cartActions from './actions/cart.actions';
import { IProduct } from '../shared/models/restaurant';

@Injectable({
  providedIn: 'root',
})
export class StoreFacadeService {
  order$ = this.store.select(selectItems);
  restaurant$ = this.store.select(selectRestaurant);
  total$ = this.store.select(selectTotal);
  constructor(private store: Store) {}

  addNewProduct(restaurant: string, item: IProduct, count: number) {
    this.store.dispatch(
      cartActions.addToCart({ restaurant, order: { item, count } })
    );
  }

  updateProduct(id: number, count: number) {
    this.store.dispatch(cartActions.updateProduct({ payload: { id, count } }));
  }
}
