"use client";

//UTILS
import Link from "next/link";

//COMPONENTS
import RegisterForm from "@/components/RegisterForm";

const Register: React.FC = () => {
  return (
    <main className="w-full min-h-screen p-4 sm:p-8">
      <section className="bg-custom-gradient min-h-full p-16 rounded-[12px] flex justify-center items-center">
        <div className="w-full lg:w-[80%] h-full lg:h-[80%] rounded-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 lg:p-8 bg-white w-full h-full rounded-[12px]">
            <div className="bg-[#D9D9D9] rounded-[12px] p-4 flex flex-col items-center text-center">
              <h3 className="text-xl lg:text-2xl mt-8 font-bold text-[#2BA84A]">
                ¡Registrate para comprar!
              </h3>
              <p className="font-semibold mt-8">
                Compra más rápido y lleva el control de tus pedidos, ¡En un solo
                lugar!
              </p>
              <span className="mt-[2rem] lg:mt-[8rem] font-semibold">
                ¿Ya tienes una cuenta?
              </span>
              <button className="bg-[#2BA84A] hover:bg-black mt-8 text-white w-full lg:w-[200px] h-[50px] lg:h-[60px] rounded-2xl transition-colors duration-300 font-medium">
                <Link href="/login">Login</Link>
              </button>
            </div>
            <div className="bg-[#D9D9D9] rounded-[12px] p-4 flex flex-col items-center">
              <RegisterForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
