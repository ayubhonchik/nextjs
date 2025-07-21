

export interface ICartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  image: string;
}


export interface ICart {
  id: number;
  products: ICartProduct[];
  total: number;
  totalProducts: number;
  totalQuantity: number;
}
