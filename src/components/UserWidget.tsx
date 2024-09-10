"use client";

import { AuthContext } from "@/contexts/authContext";
import React, { useContext } from "react";
import Link from "next/link";

const UserWidget = () => {
  const { user, logout } = useContext(AuthContext);

  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  if (user?.login) {
    return (
      <div className="flex items-center gap-4">
        <ul className="flex space-x-2">
          <li>
            <button className=" hover:bg-green-600 text-black px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              <Link href="/dashboard">
                <i className="bx bx-user"></i>
              </Link>
            </button>
          </li>
          <li>
            <button
              onClick={logout}
              className=" hover:bg-green-600  text-black px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300"
            >
              <i className="bx bx-log-out"></i>
            </button>
          </li>
          <li>
            <Link href="/cart">
              <button className=" hover:bg-green-600 flex justify-center items-center text-black px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
                <i className="bx bx-cart"></i>
                <span className="ml-2">{cart.length}</span>
              </button>
            </Link>
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <ul className="flex space-x-2">
          <li>
            <button className="bg-black hover:bg-green-600 hover:text-black text-white px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              <Link href="/login">Login</Link>
            </button>
          </li>
          <li>
            <button className="bg-black hover:bg-green-600 hover:text-black text-white px-4 py-1 border-2 border-green-500 rounded-2xl transition-colors duration-300">
              <Link href="/register">Register</Link>
            </button>
          </li>
        </ul>
      </div>
    );
  }
};

export default UserWidget;
