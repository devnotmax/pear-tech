"use client";
import { IuserSession } from "@/interfaces/forms";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
    dataUser: IuserSession | null;
    setDataUser: (dataUser: IuserSession | null) => void;
    logout: () => void;
    cart: any[];
    setCart: (cart: any[]) => void;
}

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => {},
    logout: () => {},
    cart: [],
    setCart: () => {},
});

interface AuthProviderProps {
    children: React.ReactElement;
}

// Proveedor del contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [dataUser, setDataUser] = useState<IuserSession | null>(null);
    const [cart, setCart] = useState<any[]>([]);

    // Guarda en la localStorage cuando cambia dataUser
    useEffect(() => {
        if (dataUser) {
            localStorage.setItem("userSession", JSON.stringify(dataUser));
        }
    }, [dataUser]);

    // Recupera la sesión de localStorage al montarse el componente
    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const data = localStorage.getItem("userSession");
            if (data) {
                setDataUser(JSON.parse(data));
            }

            const storedCart = localStorage.getItem("cart");
            if (storedCart) {
                setCart(JSON.parse(storedCart)); // Recuperamos el carrito de localStorage
            }
        }
    }, []);

    // Función de logout
    const logout = () => {
        setDataUser(null); // Limpia el estado de usuario
        setCart([]); // Limpia el estado del carrito
        localStorage.removeItem("userSession"); // Elimina la sesión de localStorage
        localStorage.removeItem("cart"); // Elimina el carrito de localStorage
    };

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser, logout, cart, setCart }}>
            {children}
        </AuthContext.Provider>
    );
};

// Exporta el contexto
export { AuthContext };

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);
