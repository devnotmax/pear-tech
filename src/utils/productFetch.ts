import { IProduct } from "@/interfaces/product";

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const FetchProducts = async () => {
  try {
    const res = await fetch(`${apiURL}/products`, {
      method: "GET",
      next: { revalidate: 3600 }, //opcion de revalidacion
    });
    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const FetchProductsById = async (id: string) => {
  try {
    const products = await FetchProducts();
    const product = products.find((product) => product?.id?.toString() === id);
    if (!product) {
      throw new Error("Product not found");
    }
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const FetchProductsByCategory = async (categoryId: string) => {
  try {
    const products = await FetchProducts();
    const filteredProducts = products.filter(
      (product) => product?.categoryId?.toString() === categoryId
    );
    if (filteredProducts.length === 0) {
      throw new Error("Product not found");
    }
    return filteredProducts;
  } catch (error: any) {
    throw new Error(error);
  }
};
