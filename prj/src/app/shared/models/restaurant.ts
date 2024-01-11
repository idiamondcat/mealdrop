export default interface IRest {
  id: number;
  name: string;
  address: string;
  description: string;
  category: string[];
  image: string;
  rating: IRating;
  isClosed: boolean;
  isNew: boolean;
  menu: IMenu;
}

interface IRating {
  rate: number | null;
  count: number;
}

interface IMenu {
  food: IProduct[];
  dessert: IProduct[];
  drinks: IProduct[];
}

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
}
