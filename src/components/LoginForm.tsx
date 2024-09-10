"use client";

// UTILS
import Link from "next/link";
import React, { useContext, useState } from "react";

// UTILS VALIDATORS
import { validateEmail } from "../utils/validateEmail";
import { validatePassword } from "../utils/validatePassword";
import { loginService } from "@/services/authService";
import { useRouter } from "next/navigation";

// CONTEXT
import { AuthContext } from "@/contexts/authContext";

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

export const LoginForm = () => {
  const {setUser} = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const router = useRouter();
  const [formErrors, setFormErrors] = useState({
    email: null as string | null,
    password: null as string | null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    
    if (id === "email") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        email: validateEmail(value),
      }));
    } else if (id === "password") {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        password: validatePassword(value),
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailValidationError = validateEmail(formData.email);
    const passwordValidationError = validatePassword(formData.password);

    setFormErrors({
      email: emailValidationError,
      password: passwordValidationError,
    });

    if (!emailValidationError && !passwordValidationError) {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await loginService(apiUrl + "/users/login", formData);
      if (response.login) {
        alert("Login exitoso");
        setUser(response)
        router.back();
      }
    } else {
      console.log("Errores en el formulario");
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
          error={formErrors.email} // Mostrar error de email
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
          error={formErrors.password} // Mostrar error de contraseña
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center items-center lg:w-[200px] h-[50px] lg:h-[50px] bg-[#2BA84A] hover:bg-green-900 text-white rounded-lg"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
