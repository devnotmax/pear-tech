"use client";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ContactForm = () => {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(
      "Tu consulta ha sido enviada con éxito, pronto nos estaremos comunicando contigo."
    );

    setTimeout(() => {
      router.push("/");
    }, 5000);
  };
  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input placeholder="Nombre" className="h-8 w-full p-2 rounded-md" />
        <input
          type="email"
          placeholder="Email"
          className="h-8 w-full p-2 rounded-md"
        />
        <input placeholder="Asunto" className="h-8 w-full p-2 rounded-md" />
        <textarea
          placeholder="Mensaje"
          className="h-32 w-full p-2 rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-black text-white h-10 rounded-md hover:bg-[#2BA84A] transition-colors duration-300 font-medium"
        >
          Enviar mensaje
        </button>
      </form>

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
    </>
  );
};

export default ContactForm;
