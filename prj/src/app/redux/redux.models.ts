import { IProduct } from "../shared/models/restaurant";

export interface ICart {
    orders: IOrder[],
    allItems: number
}
export interface IOrder {
    item: IProduct,
    count: number
}