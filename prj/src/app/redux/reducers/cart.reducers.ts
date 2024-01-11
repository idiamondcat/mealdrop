import { createReducer, on } from "@ngrx/store";
import { ICart } from "../redux.models";
import * as cartActions from "../actions/cart.actions";

export const initialState: ICart = {
    orders: [],
    allItems: 0
};

export const getCart = createReducer(
    initialState,
    on(cartActions.addToCart, (state, action)=> ({...state,
    orders: state.orders.map(order => ({...order})).map(order => {
        if (order.item.id === action.payload.item.id) {
            return {...order, count: order.count + action.payload.count}
        } else {
            return order;
        }
    }), allItems: state.orders.reduce((prev, next) => prev = prev + next.count, 0)
    })),
)