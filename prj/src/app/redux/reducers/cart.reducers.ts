import { createReducer, on } from '@ngrx/store';
import { ICart } from '../redux.models';
import * as cartActions from '../actions/cart.actions';
import { state } from '@angular/animations';

export const initialState: ICart = {
  orders: [],
};

export const getCart = createReducer(
  initialState,
  on(cartActions.addToCart, (state, action) => {
    const orderIdx = state.orders.findIndex(
      order => order.item.id === action.payload.item.id
    );
    if (orderIdx !== -1) {
      const copyOfOrders = [...state.orders];
      copyOfOrders[orderIdx] = {...copyOfOrders[orderIdx], count: action.payload.count};
      return {
        ...state,
        orders: copyOfOrders,
      };
    } else {
      return {
        ...state,
        orders: [...state.orders, action.payload],
      };
    }
  }),
  on(cartActions.updateProduct, (state, action) => {
    const orderIdx = state.orders.findIndex(
      order => order.item.id === action.payload.id
    );
    const copyOfOrders = [...state.orders];
    if (action.payload.count > 0) {
      copyOfOrders[orderIdx] = {...copyOfOrders[orderIdx], count: action.payload.count};
      return {
        ...state,
        orders: copyOfOrders,
      };
    } else {
      return {
        ...state,
        orders: copyOfOrders.filter(elem => elem.item.id !== action.payload.id),
      };
    }
    })
);
