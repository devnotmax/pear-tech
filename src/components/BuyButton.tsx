"use client";

import { useAuth } from "@/contexts/authContext";
import IProduct from "@/interfaces/product";
import { useRouter } from "next/navigation";
import { Pathroutes } from "@/utils/PathRoutes";

interface BuyButtonProps {
  product: IProduct;
}

const BuyButton = ({ product }: BuyButtonProps) => {
  const router = useRouter();
  const { dataUser, setCart } = useAuth();  // Obtén setCart del contexto

  const handleAddToCart = () => {
    if (!dataUser?.token) {
      alert("You must be logged in to add to cart");
      router.push(Pathroutes.LOGIN);
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const productExist = cart.some((item: IProduct) => item.id === product.id);

      if (productExist) {
        alert("Product already in cart");
      } else {
        const updatedCart = [...cart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        
        // Actualiza el carrito en el contexto
        setCart(updatedCart);
        
        alert("Product added to cart");
        router.refresh(); // Opcional, para refrescar la página si es necesario
      }
    }
  };

  return <button onClick={handleAddToCart}>Comprar</button>;
};

export default BuyButton;
