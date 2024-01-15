import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICart, IOrder } from '../redux.models';

const selectCartSlice = createFeatureSelector<ICart>('order');
export const selectItems = createSelector(
  selectCartSlice,
  (state: ICart): IOrder[] => state.orders
);
