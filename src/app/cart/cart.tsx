"use client";

import React, { useContext, useState, useEffect } from "react";
import CartProductCard from "@/components/ProductCart";
import IProduct from "@/interfaces/product";
import { AuthContext, useAuth } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pathroutes } from "@/utils/PathRoutes";
import { createOrder } from "@/utils/orders";

export const Cart: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0); // Precio total
  const { dataUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    if (storedCart) {
      let totalCart = 0;
      storedCart.forEach((product: IProduct) => {
        totalCart += product.price;
      });
      setTotal(totalCart);
      setCart(storedCart);
    }
  }, []);

  const handleCheckOut = async () => {
    const idProducts = cart.map((product) => product.id);
    try {
      await createOrder(idProducts, dataUser?.token!); // Petición al backend

      setCart([]);
      setTotal(0);
      localStorage.removeItem("cart");
      router.push(Pathroutes.DASHBOARD);
    } catch (error) {}
  };
  return (
    <main className="container flex-1 p-8 h-auto mb-4">
      <h1 className="text-3xl font-bold mb-1">Mi carrito</h1>
      <hr className="border-t-2 border-black 500" />
      <section className="bg-black p-6 rounded-lg shadow-md text-black flex justify-center mt-5 gap-2 h-[100%] mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md w-[50%] flex flex-col justify-between h-full">
          <div className="flex-grow flex flex-col gap-4"></div>
          {cart.map((product: IProduct, i: number) => (
            <div key={i}>{<CartProductCard product={product} />}</div>
          ))}
          <div className="mt-4">
            <hr className="border-t-2 border-gray-300 mb-4" />
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">
                Total products: {cart.length}
              </span>
              <span className="text-lg font-semibold">{cart.length}</span>
              <span>Total: ${total}</span>
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Descartar Carrito <i className="bx bxs-cart text-xl"></i>
              </button>
              <button
                onClick={handleCheckOut}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Finalizar orden <i className="bx bx-check-square"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
