import { createAction, props } from "@ngrx/store";
import { ICart } from "../redux.models";
import { IOrder } from "../redux.models";
import { IProduct } from "src/app/shared/models/restaurant";

// export const getCart = createAction(
//     '[CART] get',
//     props<{ payload: IOrder[] }>()
// );
export const addToCart = createAction(
    '[CART] add',
    props<{ payload: IOrder }>()
);
export const removeFromCart = createAction(
    '[CART] remove',
    props<{ id: string }>()
);