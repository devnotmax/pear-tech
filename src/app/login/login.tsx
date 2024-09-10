// UTILS
import Link from "next/link";
import React, { useState } from "react";

//COMPONENTES
import LoginForm from "@/components/LoginForm";

export const Login: React.FC = () => {
  return (
    <main className="w-full min-h-screen p-4 sm:p-8">
      <section className="bg-custom-gradient min-h-full p-8 sm:p-16 rounded-[12px] flex justify-center items-center">
        <div className="w-full lg:w-[80%] h-full lg:h-[80%] rounded-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-8 bg-white w-full h-full min-h-[6\00px] rounded-[12px]">
            <div className="bg-[#D9D9D9] rounded-[12px] p-4 flex flex-col items-center text-center">
              <h3 className="text-xl lg:text-2xl mt-8 font-bold text-[#2BA84A]">
                ¡Accede a Tu Cuenta y Compra Fácilmente!
              </h3>
              <p className="font-semibold mt-8">
                Organiza tus pedidos y disfruta de un proceso de compra sencillo
                y seguro.
              </p>
              <span className="mt-[2rem] lg:mt-[8rem] font-semibold">
                ¿Todavía no tienes una cuenta?
              </span>
              <button className="bg-[#2BA84A] hover:bg-black mt-8 text-white w-full lg:w-[200px] h-[50px] lg:h-[60px] rounded-2xl transition-colors duration-300 font-medium">
                <Link href="/register">Registrar</Link>
              </button>
            </div>

            <div className="bg-[#D9D9D9] rounded-[12px] p-4 flex flex-col items-center">
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
