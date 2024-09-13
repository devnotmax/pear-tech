import { getProductService } from "@/services/getProductService";
import ProductCard from "./ProductCard";
import { products } from "@/mocks/products";
import IProduct from "@/interfaces/product";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export const ProductBar = async () => {
  const url = `${process.env.API_URL}/products`;
  const products = await getProductService(url);
  const displayedProducts = products.slice(0, 5);

  return (
    <div className="container w-[90%]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1">
        {displayedProducts.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="bg-black text-white font-medium py-2 px-4 rounded-2xl hover:scale-105 hover:text-[#2BA84A]">
          <Link href="/products" className="flex items-center gap-2">
            <p>Ver más</p>
            <IoIosArrowDown size={20} />
          </Link>
        </button>
      </div>
    </div>
  );
};
