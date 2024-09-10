export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: image | string;
    categoryId: category | number;
  }
  
  export interface image {
    url: string;
  }
  
  interface category {
    id: number;
    name: string;
  }
  
  export default IProduct;