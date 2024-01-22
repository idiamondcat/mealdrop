import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICart, IOrder } from '../redux.models';

const selectCartSlice = createFeatureSelector<ICart>('order');
export const selectItems = createSelector(
  selectCartSlice,
  (state: ICart): IOrder[] => state.orders
);
export const selectRestaurant = createSelector(
  selectCartSlice,
  (state: ICart): string => state.restaurant
);
export const selectTotal = createSelector(
  selectCartSlice,
  (state: ICart): number =>
    state.orders.reduce(
      (prev, next) => (prev = prev + next.item.price * next.count),
      0
    )
);
