import React from "react";
import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../interfaces/product";
import { FetchProducts } from "@/utils/productFetch";

const ProductsCards: React.FC = async () => {
  const products = await FetchProducts();

    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Productos</h1>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: IProduct) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </main>
    );
};

export default ProductsCards;
