//Luego aca lo que hariamos seria reemplazar el contenido de los botones con un Link para redirigir a la ruta que filtra por categorias (check backend)

export const CategoryBar = () => {
  return (
    <div className="flex flex-row justify-center gap-4 h-[80px] p-4 mb-4">
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="bg-black text-white w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium">
          Todos 
        </button>
        <button className="bg-black text-white w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium">
          Celulares
        </button>
        <button className="bg-black text-white w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium">
          Smartwatch
        </button>
        <button className="bg-black text-white w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium">
          Tablets
        </button>
        <button className="bg-black text-white w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium">
          Airpods
        </button>
        <button className="bg-black text-white w-[120px] sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium">
          Accesorios
        </button>
      </div>
    </div>
  );
};

export default CategoryBar;
