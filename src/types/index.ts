

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

export interface IUser {
  id: number;
  name: string;
  email: string;
  image: string; 
}

export interface IRecipe {
  id: number;
  title: string;
  description: string;
  image: string; 
}