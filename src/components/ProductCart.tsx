// import React from "react";
// import { Product } from "../app/products/types"; // Asegúrate de ajustar la ruta según tu estructura de archivos

// export interface CartProductCardProps {
//   product: Product;
// }

// const CartProductCard: React.FC<CartProductCardProps> = ({ product }) => {
//   if (!product) {
//     return null; // Si product no está definido, no renderiza nada
//   }

//   return (
//     <li className="border p-4 rounded-lg flex items-center space-x-4">
//       {typeof product.image === "string" ? (
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-16 h-16 object-cover rounded-md"
//         />
//       ) : (
//         <img
//           src={product.image.url} // Aquí se accede a la propiedad 'url' porque hemos verificado que 'image' es de tipo 'image'
//           alt={product.name}
//           className="w-16 h-16 object-cover rounded-md"
//         />
//       )}
//       <div className="flex flex-col space-y-1">
//         <h2 className="text-sm font-semibold">{product.name}</h2>
//         <p className="text-md text-green-500">${product.price}</p>
//       </div>
//     </li>
//   );
// };

// export default CartProductCard;
import React from "react";
import { Product } from "../app/products/types"; // Asegúrate de ajustar la ruta según tu estructura de archivos

export interface CartProductCardProps {
  product: Product;
}

const CartProductCard: React.FC<CartProductCardProps> = ({ product }) => {
  if (!product) {
    return null; // Si product no está definido, no renderiza nada
  }

  return (
    <li className="border p-4 rounded-lg flex items-center space-x-4">
      {typeof product.image === "string" ? (
        <img
          src={product.image}
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
      ) : (
        <img
          src={product.image.url} // Aquí se accede a la propiedad 'url' porque hemos verificado que 'image' es de tipo 'image'
          alt={product.name}
          className="w-16 h-16 object-cover rounded-md"
        />
      )}
      <div className="flex flex-col space-y-1 flex-grow">
        <h2 className="text-sm font-semibold">{product.name}</h2>
        <p className="text-md text-green-500">${product.price}</p>
      </div>
      <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-[8px] focus:outline-none focus:ring-2 focus:ring-red-500">
        <i className="bx bxs-trash-alt text-xl"></i>
      </button>
    </li>
  );
};

export default CartProductCard;
