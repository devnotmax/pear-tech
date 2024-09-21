"use client";

import { useAuth } from "@/contexts/authContext";
import IProduct from "@/interfaces/product";
import { useRouter } from "next/navigation";
import { Pathroutes } from "@/utils/PathRoutes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BuyButtonProps {
  product: IProduct;
}

const BuyButton = ({ product }: BuyButtonProps) => {
  const router = useRouter();
  const { dataUser, setCart } = useAuth();

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
        toast.warning("Este producto ya se ha agregado al carrito, por favor elija otro");
      } else {
        const updatedCart = [...cart, product];
        localStorage.setItem("cart", JSON.stringify(updatedCart));

        // Actualiza el carrito en el contexto
        setCart(updatedCart);

        toast.success("El producto se ha agregado al carrito!");
        router.refresh(); // Opcional, para refrescar la página si es necesario
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <button
        onClick={handleAddToCart}
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-200"
      >
        Comprar
      </button>
    </>
  );
};

export default BuyButton;
