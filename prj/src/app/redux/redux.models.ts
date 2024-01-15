import { IProduct } from '../shared/models/restaurant';

export interface ICart {
  orders: IOrder[];
}
export interface IOrder {
  item: IProduct;
  count: number;
}
