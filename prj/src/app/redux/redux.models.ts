import { IProduct } from '../shared/models/restaurant';

export interface ICart {
  restaurant: string;
  orders: IOrder[];
}
export interface IOrder {
  item: IProduct;
  count: number;
}
