"use client";

import { IuserSession } from "@/interfaces/forms";
import { useEffect, useState, createContext } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  user: IuserSession | null;
  setUser: (user: IuserSession | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IuserSession | null>(null);

  // Guardar el usuario en localStorage cada vez que se actualiza el estado
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
  }, [user]);

  // Recuperar el usuario desde localStorage al cargar la página
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser)); // Aquí asignamos directamente el objeto
      }
    }
  }, []); // Solo se ejecuta una vez al montar el componente

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
