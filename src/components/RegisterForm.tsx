"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

//UTILS VALIDATORS
import { validateRegisterForm } from "@/utils/validationRegister";
import { Pathroutes } from "@/utils/PathRoutes";
import { useRouter } from "next/navigation";
import { RegisterUser } from "@/services/authService";
import { IRegister, IRegisterError } from "@/interfaces/Iauth";

interface InputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  name: string; // Atributo name añadido
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// Componente reutilizable para campos de entrada
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  id,
  name, // Atributo name añadido
  value,
  onChange,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        name={name} // Atributo name añadido
        value={value}
        onChange={onChange}
        className={`w-full h-[50px] p-2 border rounded-lg focus:outline-none`}
      />
    </div>
  );
};

export const RegisterForm = () => {
  const router = useRouter();

  const [userData, setUserData] = useState<IRegister>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const [errorUser, setErrorUser] = useState<IRegisterError>({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value, // Atributo name utilizado para actualizar el estado
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await RegisterUser(userData);
      router.push(Pathroutes.LOGIN);
    } catch (error: any) {
      console.error(error);
    }
  };

  useEffect(() => {
    const errors = validateRegisterForm(userData);
    setErrorUser(errors);
  }, [userData]);

  return (
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
          name="email" // Atributo name añadido
          value={userData.email}
          onChange={handleChange}
        />
        {errorUser.email && <p className="text-red-500">{errorUser.email}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm lg:text-base">
          Contraseña
        </label>
        <InputField
          type="password"
          placeholder="Password"
          id="password"
          name="password" // Atributo name añadido
          value={userData.password}
          onChange={handleChange}
        />
        {errorUser.password && (
          <p className="text-red-500">{errorUser.password}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm lg:text-base">
          Nombre Completo
        </label>
        <InputField
          type="text"
          id="name"
          name="name" // Atributo name añadido
          value={userData.name}
          placeholder="Nombre"
          onChange={handleChange}
        />
        {errorUser.name && <p className="text-red-500">{errorUser.name}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="address" className="text-sm lg:text-base">
          Dirección
        </label>
        <InputField
          type="text"
          placeholder="Dirección"
          id="address"
          name="address" // Atributo name añadido
          value={userData.address}
          onChange={handleChange}
        />
        {errorUser.address && (
          <p className="text-red-500">{errorUser.address}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm lg:text-base">
          Teléfono
        </label>
        <InputField
          type="number"
          placeholder="Teléfono"
          id="phone"
          name="phone" // Atributo name añadido
          value={userData.phone}
          onChange={handleChange}
        />
        {errorUser.phone && <p className="text-red-500">{errorUser.phone}</p>}
      </div>
      <button
        type="submit"
        className="w-full flex justify-center items-center lg:w-[200px] h-[50px] lg:h-[50px] bg-[#2BA84A] hover:bg-green-900 text-white rounded-lg"
      >
        Registrarme
      </button>
    </form>
  );
};

export default RegisterForm;
