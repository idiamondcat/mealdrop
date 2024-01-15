import { createReducer, on } from '@ngrx/store';
import { ICart } from '../redux.models';
import * as cartActions from '../actions/cart.actions';

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
      const updArr = [...state.orders];
      updArr[orderIdx].count += action.payload.count;
      return {
        ...state,
        orders: updArr,
        // allItems: state.allItems + action.payload.count,
      };
    } else {
      return {
        ...state,
        orders: [...state.orders, action.payload],
        // allItems: state.allItems + action.payload.count,
      };
    }
  })
);
