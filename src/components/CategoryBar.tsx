export const CategoryBar = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 h-auto p-4 mb-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {["Todos", "Celulares", "Smartwatch", "Tablets", "Airpods", "Accesorios"].map((category) => (
          <button
            key={category}
            className="bg-black text-white w-full sm:w-[150px] md:w-[180px] lg:w-[200px] h-[50px] sm:h-[60px] border-4 hover:bg-[#2BA84A] border-[#2BA84A] rounded-2xl transition-colors duration-300 font-medium"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
