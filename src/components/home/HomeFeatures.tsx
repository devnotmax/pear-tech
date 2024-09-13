import React from "react";
import { FaShippingFast, FaShieldAlt, FaHeadset } from "react-icons/fa";

const HomeFeatures: React.FC = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-[#2BA84A] text-4xl" />,
      title: "Envios Seguros",
      description:
        "Garantizamos envíos rápidos y seguros a todo el país, con seguimiento en tiempo real.",
    },
    {
      icon: <FaShieldAlt className="text-[#2BA84A] text-4xl" />,
      title: "Protección de Garantía",
      description:
        "Disfruta de nuestra protección extendida en todos los productos con garantía asegurada.",
    },
    {
      icon: <FaHeadset className="text-[#2BA84A] text-4xl" />,
      title: "Soporte 24/7",
      description:
        "Nuestro equipo de soporte está disponible 24/7 para asistirte en todo momento.",
    },
  ];

  return (
    <div className=" text-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Por qué elegirnos?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-300 text-black p-6 rounded-lg shadow-md text-center hover:bg-pink-0 transition duration-300 flex flex-col items-center
            justify-center"
            >
              <div className="mb-4 text-black">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
