import { createAction, props } from '@ngrx/store';
import { IOrder } from '../redux.models';

export const addToCart = createAction(
  '[CART] add',
  props<{ restaurant: string; order: IOrder }>()
);
export const updateProduct = createAction(
  '[CART] update',
  props<{ payload: { id: number; count: number } }>()
);
export const removeFromCart = createAction(
  '[CART] remove',
  props<{ id: string }>()
);
export const clearCart = createAction('[CART] clear');
