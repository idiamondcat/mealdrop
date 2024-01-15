import { ActionReducerMap } from '@ngrx/store';
import { ICart } from '../redux.models';
import { getCart } from './cart.reducers';

export interface State {
  order: ICart;
}
export const reducers: ActionReducerMap<State> = {
  order: getCart,
};
