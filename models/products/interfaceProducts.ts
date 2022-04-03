export interface IProduct {
  id?: string;
  name: string;
  price: number;
  location: string;
}

export interface IArg {
  action: string;
  id?: string;
  data?: IProduct;
}
