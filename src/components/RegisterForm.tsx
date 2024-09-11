"use client";

import React, { useEffect, useState } from "react";

//UTILS VALIDATORS
import { validateName } from "../utils/validateName";
import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";
import { validatePhone } from "../utils/validatePhone";
import { validateAddress } from "../utils/validateAddress";
import { registerService } from "@/services/authService";
import { useRouter } from "next/navigation";

interface InputFieldProps {
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string | null;
}

// Componente reutilizable para campos de entrada
const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  id,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={onChange}
        className={`w-full h-[50px] p-2 border rounded-lg focus:outline-none ${
          error
            ? "border-red-500 focus:ring-2 focus:ring-red-500"
            : "border-gray-300 focus:ring-2 focus:ring-green-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verificamos si estamos en el cliente
    setIsClient(typeof window !== "undefined");
  }, []);

  const [formErrors, setFormErrors] = useState({
    name: null as string | null,
    email: null as string | null,
    password: null as string | null,
    phone: null as string | null,
    address: null as string | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));

    switch (id) {
      case "name":
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          name: validateName(value),
        }));
        break;
      case "email":
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          email: validateEmail(value),
        }));
        break;
      case "password":
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          password: validatePassword(value),
        }));
        break;
      case "phone":
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          phone: validatePhone(value),
        }));
        break;
      case "address":
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          address: validateAddress(value),
        }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameValid = !validateName(formData.name);
    const emailValid = !validateEmail(formData.email);
    const passwordValid = !validatePassword(formData.password);
    const phoneValid = !validatePhone(formData.phone);
    const addressValid = !validateAddress(formData.address);

    if (
      nameValid &&
      emailValid &&
      passwordValid &&
      phoneValid &&
      addressValid
    ) {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await registerService(
        apiUrl + "/users/register",
        formData
      );
      if (!response.message) {
        alert("Ya estás registrado, Bienvenido!!");
        router.back();
      }
    } else {
      console.log("Hay errores en el formulario");
    }
  };

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
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className="text-sm lg:text-base">
          Contraseña
        </label>
        <InputField
          type="password"
          placeholder="Password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          error={formErrors.password}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="name" className="text-sm lg:text-base">
          Nombre Completo
        </label>
        <InputField
          type="text"
          id="name"
          value={formData.name}
          placeholder="Nombre"
          onChange={handleChange}
          error={formErrors.name}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="address" className="text-sm lg:text-base">
          Dirección
        </label>
        <InputField
          type="text"
          placeholder="Dirección"
          id="address"
          value={formData.address}
          onChange={handleChange}
          error={formErrors.address}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-sm lg:text-base">
          Teléfono
        </label>
        <InputField
          type="number"
          placeholder="Teléfono"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          error={formErrors.phone}
        />
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
