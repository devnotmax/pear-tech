"use client";

// UTILS
import Link from "next/link";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ILogin, ILoginError } from "@/interfaces/Iauth";

// UTILS VALIDATORS
import { validateLoginForm } from "@/utils/validationLogin";
import { LoginUser } from "@/services/authService";
import { useRouter } from "next/navigation";
import { Pathroutes } from "@/utils/PathRoutes";

// CONTEXT
import { useAuth } from "@/contexts/authContext";

interface InputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Componente reutilizable para campos de entrada
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  id,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full pl-10 pr-4 py-2 rounded-full text-black bg-gray-50 focus:bg-white focus:outline-none"
      />
    </div>
  );
};

const LoginForm = () => {
  const router = useRouter();
  const { setDataUser } = useAuth();

  const [userData, setUserData] = useState<ILogin>({
    email: "",
    password: "",
  });

  const [errorUser, setErrorUser] = useState<ILoginError>({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar contraseña

  // Gestiona el cambio en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await LoginUser(userData);
      setDataUser(res);
      document.cookie = `userSession=${JSON.stringify(res)}; path=/`;
      if (res && res.user) { // Ajusta esto según tu estructura de respuesta
        toast.success("Sesión iniciada con éxito");
        router.push(Pathroutes.DASHBOARD);
      }
    } catch (error: any) {
      toast.error(error.message);
      console.log(error); // Asegúrate de mostrar el error para depuración
    }
  };

  // Validación de formulario y manejo de errores
  useEffect(() => {
    const errors = validateLoginForm(userData);
    setErrorUser(errors);
  }, [userData]);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
      <form
        className="flex flex-col space-y-4 p-4 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm lg:text-base">
            Correo Electrónico
          </label>
          <InputField
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errorUser.email && (
            <p className="text-sm text-red-500 mt-1">{errorUser.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm lg:text-base">
            Contraseña
          </label>
          <InputField
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errorUser.password && (
            <p className="text-sm text-red-500 mt-1">{errorUser.password}</p>
          )}
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-sm text-blue-500 mt-2"
          >
            {showPassword ? "Ocultar" : "Mostrar"} Contraseña
          </button>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center items-center lg:w-[200px] h-[50px] lg:h-[50px] bg-[#2BA84A] hover:bg-green-900 text-white rounded-lg"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
