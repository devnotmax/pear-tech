import React from 'react';
import Link from 'next/link';
import { Pathroutes } from '@/utils/PathRoutes';

const HomeBackground: React.FC = () => {
  return (
    <div className="relative h-[80vh] flex items-center justify-start bg-black">
      {/* Imagen para pantallas grandes */}
      <div className="hidden md:flex absolute inset-0 items-center" style={{ justifyContent: 'flex-end' }}>
        <img 
          src="/todo.jpeg" 
          alt="Background Image" 
          className="w-[80%] h-[90%] object-cover" 
          style={{ marginRight: '10%' }} // Ajusta este valor para mover la imagen más hacia la derecha
        />
      </div>
      {/* Imagen para pantallas pequeñas */}
      <div className=" md:hidden absolute inset-0 flex items-center justify-center">
        <img 
          src="/celu.jpeg" 
          alt="Mobile Background Image" 
          className="w-full h-full object-cover opacity-70"
        />
      </div>
      {/* Contenido de texto y botón */}
      <div className="absolute text-center mx-10 pt-10 inset-0 flex-col items-center justify-start md:relative md:text-left md:max-w-xl md:p-8 text-white md:ml-10 md:rounded-lg 2xl:px-20 2xl:max-w-2xl">
        <h1 className="text-4xl font-bold text-pink-0 mb-4">Discover the Best in Apple at Apple Center</h1>
        <p className="text-lg mb-4">&quot;Discover the latest Apple products! Shop now to find the perfect device for you.&quot;</p>
        <Link href={Pathroutes.PRODUCTS} className="px-10 py-3 text-black font-bold bg-pink-0 rounded-full hover:bg-black hover:text-white">Shop Now
        </Link>
      </div>
    </div>
  );
}

export default HomeBackground;