import { IProduct } from "./product";

export interface IOrders {
  id: number;
  status: string;
  date: string;
  products: IProduct[];
}
