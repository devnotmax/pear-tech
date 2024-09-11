"use client";

import React, { useContext, useState } from "react";
import CartProductCard from "@/components/ProductCart";
import IProduct from "@/interfaces/product";
import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Cart: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [cart, setCart] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : []
  );
  const router = useRouter();

  if (!user?.login) {
    return (
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <p>Debes iniciar sesion para ver tu carrito</p>
        <button className="bg-black hover:bg-green-600 hover:text-black text-white px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
          <Link href="/login">Iniciar Sesion</Link>
        </button>
      </div>
    );
  }

  const handleOrder = () => {
    const url =
      process.env.NEXT_PUBLIC_API_URL + "/orders" ||
      "http://localhost:3001/orders";
    const req = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: user?.token,
      },
      body: JSON.stringify({
        userId: user?.user.userId,
        products: cart.map((product: IProduct) => product.id),
      }),
    };
    fetch(url, req)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        localStorage.setItem("cart", JSON.stringify([]));
        setCart([]);
        alert("Success!");
        router.refresh();
      })
      .catch((err) => console.log(err));
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
            </div>
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Descartar Carrito <i className="bx bxs-cart text-xl"></i>
              </button>
              <button
                onClick={handleOrder}
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
