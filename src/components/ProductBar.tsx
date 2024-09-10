import { getProductService } from "@/services/getProductService";
import ProductCard from "./ProductCard";
import { products } from "@/mocks/products";
import IProduct from "@/interfaces/product";

export const ProductBar = async() => {
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
    </div>
  );
};
