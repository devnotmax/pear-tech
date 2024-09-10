"use client";

import { AuthContext } from "@/contexts/authContext";
import IProduct from "@/interfaces/product";
import { useRouter } from "next/navigation";
import { useContext } from "react";

interface BuyButtonProps {
  product: IProduct;
}
const BuyButton = ({ product }: BuyButtonProps) => {
  //usamos el contexto
  const { user } = useContext(AuthContext);
  //El router me permite redirigir a alguien si no esta logueado en este caso
  const router = useRouter();
  const handleBuy = () => {
    //Si no esta logueado no va a poder agregar al carrito
    if (!user?.login) {
      router.push("/login");
    } else {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (!cart.some((p: IProduct) => p.id === product?.id)) {
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`Se agrego ${product?.name} al carrito`);
      } else{
        alert(`El producto ${product?.name} ya se encuentra en el carrito`)
      }
    }
    router.refresh();
  };

  return <button onClick={handleBuy}>Comprar</button>;
};

export default BuyButton;
