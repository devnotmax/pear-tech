"use client";

import { AuthContext } from "@/contexts/authContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { useAuth } from "@/contexts/authContext";
import { getOrders } from "@/utils/orders";
import { IOrders } from "@/interfaces/Iorders";
import CartOrder from "@/components/CartOrder";

const Dashboard = () => {
  const [orders, setOrders] = useState<IOrders[]>([]); //ordenes
  const { dataUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const ordersRes = await getOrders(dataUser?.token!);
      setOrders(ordersRes);
    };
    dataUser?.token && fetchData();
  }, [dataUser?.token]);

  return (
    <main className="container flex-1 p-8 h-auto">
      <h1 className="text-2xl font-bold mb-4">
        Bienvenido {dataUser ? dataUser?.user?.name : "Username"}!!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-1/2">
        {/* Mis pedidos */}
        <section className="bg-white p-6 rounded-lg shadow-md text-black">
          <h2 className="text-2xl font-bold mb-4">Tus Órdenes</h2>
          <hr />

          <div className="mt-5 flex flex-col gap-4">
            {orders &&
              orders.map((order) => (
                <div key={order.id} className="mb-4 p-4 ">
                  <CartOrder date={order.date} orders={order.products} />
                </div>
              ))}
          </div>
        </section>

        {/* Perfil info */}
        <section className="bg-white p-6 rounded-lg shadow-md text-black">
          <h2 className="text-2xl font-bold mb-4">Mi perfil</h2>
          <hr />
          <ul className="mt-5 bg-white p-6 rounded-lg shadow-md text-black text-center font-medium">
            <li>Nombre: {dataUser?.user?.name}</li>
            <li>Email: {dataUser?.user?.email}</li>
            <li>Dirección: {dataUser?.user?.address}</li>
            <li>Celular: {dataUser?.user?.phone}</li>
            <li>Pedidos: {dataUser?.user.orders?.length}</li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
