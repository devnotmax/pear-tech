import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProduct } from "../interfaces/product";

export interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full p-4 max-w-sm">
      <Link
        href={`/products/${product.id}`}
        className="block bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:scale-105 transition-transform duration-300 ease-in-out"
      >
        <div className="flex flex-col items-center">
          <img
            src={
              typeof product.image === "string"
                ? product.image
                : product.image.url
            }
            alt={product.name}
            className="w-full h-auto"
            
          />
          <div className="p-4 w-full text-center">
            <h1 className="text-lg font-semibold text-gray-800 truncate">
              {product.name}
            </h1>
            <p className="text-gray-600">${product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
