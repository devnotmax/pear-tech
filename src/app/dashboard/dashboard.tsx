"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (!user?.login) {
  //     router.push("/login");
  //   }
  // }, []);

  return (
    <main className="container flex-1 p-8 h-auto">
      <h1 className="text-3xl font-bold mb-5">Bienvenido {user?.user.name}!</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-1/2">
        {/* Mis pedidos */}
        <section className="bg-black p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-bold mb-4">Mis pedidos</h2>
          <hr />

          <div className="mt-5 flex flex-col gap-4">
            {user?.user.orders?.map((order) => (
              <div
                key={order.id}
                className="bg-gray-200 text-black p-6 rounded-lg shadow-md gap-4"
              >
                <h2>Fecha: {order.date}</h2>
                <p>Estado: {order.status}</p>
                <p>Nro de orden: {order.id}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Perfil info */}
        <section className="bg-black p-6 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-bold mb-4">Mi perfil</h2>
          <hr />
          <ul className="mt-5 bg-white p-6 rounded-lg shadow-md text-black text-center font-medium">
            <li>Nombre: {user?.user.name}</li>
            <li>Email: {user?.user.email}</li>
            <li>Dirección: {user?.user.address}</li>
            <li>Celular: {user?.user.phone}</li>
            <li>Pedidos: {user?.user.orders?.length}</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
