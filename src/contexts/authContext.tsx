"use client";
import { IuserSession } from "@/interfaces/forms";
import { createContext, useContext, useState, useEffect } from "react";

interface AuthContextProps {
    dataUser: IuserSession | null;
    setDataUser: (dataUser: IuserSession | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextProps>({
    dataUser: null,
    setDataUser: () => {},
    logout: () => {},
});

interface AuthProviderProps {
    children: React.ReactElement;
}

// Proveedor del contexto
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [dataUser, setDataUser] = useState<IuserSession | null>(null);

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
        }
    }, []);

    // Función de logout
    const logout = () => {
        setDataUser(null); // Limpia el estado de usuario
        localStorage.removeItem("userSession"); // Elimina la sesión de localStorage
    };

    return (
        <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Exporta el contexto
export { AuthContext };

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);
