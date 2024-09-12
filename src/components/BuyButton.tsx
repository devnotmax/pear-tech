"use client";

import { useAuth } from "@/contexts/authContext";
import IProduct from "@/interfaces/product";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { Pathroutes } from "@/utils/PathRoutes";

interface BuyButtonProps {
  product: IProduct;
}
const BuyButton = ({ product }: BuyButtonProps) => {
  const router = useRouter();
  const { dataUser } = useAuth();

  const handleAddToCart = () => {
    if (!dataUser?.token) {
      alert("You must be logged in to add to cart");
      router.push(Pathroutes.LOGIN);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some(
        (item: IProduct) => item.id === product.id
      );

      if (productExist) {
        alert("Product already in cart");
        router.refresh();
      } else {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart");
        router.push(Pathroutes.CART);
      }
    }
  };

  return <button onClick={handleAddToCart}>Comprar</button>;
};

export default BuyButton;
