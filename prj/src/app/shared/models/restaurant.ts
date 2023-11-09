export default interface IRest {
  id: number;
  name: string;
  address: string;
  description: string;
  category: string[];
  image: string;
  rating: {
    rate: number | null;
    count: number;
  };
  isClosed: boolean;
  isNew: boolean;
  menu: {
    food: IProduct[];
    dessert: IProduct[];
    drinks: IProduct[];
  };
}

export interface IProduct {
  id: number;
  name: string;
  description?: string;
  price: number;
}
