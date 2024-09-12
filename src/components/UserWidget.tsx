"use client";

import { AuthContext } from "@/contexts/authContext";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";

const UserWidget = () => {
  const { dataUser, logout } = useContext(AuthContext);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Acceder a localStorage solo en el cliente
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setCart(storedCart);
    }
  }, []);

  return (
    <div className="flex items-center space-x-4">
      {dataUser?.login ? (
        <>
          <Link href="/dashboard">
            <button className="hover:bg-green-600 text-black px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              <i className="bx bx-user"></i>
            </button>
          </Link>
          <button
            onClick={logout}
            className="hover:bg-green-600 text-black px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300"
          >
            <i className="bx bx-log-out"></i>
          </button>
          <Link href="/cart">
            <button className="hover:bg-green-600 flex items-center text-black px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              <i className="bx bx-cart"></i>
              <span className="ml-2">{cart.length}</span>
            </button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/login">
            <button className="bg-black hover:bg-green-600 hover:text-black text-white px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              Login
            </button>
          </Link>
          <Link href="/register">
            <button className="bg-black hover:bg-green-600 hover:text-black text-white px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              Register
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default UserWidget;
