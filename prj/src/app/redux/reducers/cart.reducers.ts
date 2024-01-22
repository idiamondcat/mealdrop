import { createReducer, on } from '@ngrx/store';
import { ICart } from '../redux.models';
import * as cartActions from '../actions/cart.actions';

export const initialState: ICart = {
  restaurant: '',
  orders: [],
};

export const getCart = createReducer(
  initialState,
  on(cartActions.addToCart, (state, action) => {
    const restaurant = state.restaurant ? state.restaurant : action.restaurant;
    const orderIdx = state.orders.findIndex(
      order => order.item.id === action.order.item.id
    );
    if (orderIdx !== -1) {
      const copyOfOrders = [...state.orders];
      copyOfOrders[orderIdx] = {
        ...copyOfOrders[orderIdx],
        count: action.order.count,
      };
      return {
        ...state,
        orders: copyOfOrders,
        restaurant: restaurant,
      };
    } else {
      return {
        ...state,
        orders: [...state.orders, action.order],
        restaurant: restaurant,
      };
    }
  }),
  on(cartActions.updateProduct, (state, action) => {
    const orderIdx = state.orders.findIndex(
      order => order.item.id === action.payload.id
    );
    const copyOfOrders = [...state.orders];
    if (action.payload.count > 0) {
      copyOfOrders[orderIdx] = {
        ...copyOfOrders[orderIdx],
        count: action.payload.count,
      };
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
