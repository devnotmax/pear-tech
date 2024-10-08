import IProduct from "@/interfaces/product";
import { getProductById } from "@/services/getProductService";
import { notFound } from "next/navigation";
import BuyButton from "@/components/BuyButton";
import Image from "next/image";

const page = async ({ params }: { params: { id: string } }) => {
  const url = `${process.env.API_URL}/products`;
  const product = await getProductById(url, params.id);

  if (product === undefined) {
    notFound();
  }

  return (
    <main className="container mx-auto p-8 bg-gray-100">
      <div className="p-10">
        <div className="container grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-1 md:col-span-2 md:row-span-4 p-8 bg-gray-200 flex justify-center items-center rounded-xl">
            <img
              src={product?.image as string}
              alt={product.name}
              className="rounded-xl"
            />
          </div>
          <div className="col-span-1 md:col-span-3 md:row-span-5 md:col-start-3 p-8 bg-gray-200 rounded-xl shadow-lg flex flex-col justify-center space-y-4">
            <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-2xl font-montserrat font-semibold text-gray-700 underline">
              ${product.price}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <p
              className={`text-lg font-semibold ${
                product.stock > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.stock > 0 ? `${product.stock} En Stock` : "Agotado"}
            </p>
          </div>

          <div className="col-span-1 p-4 md:col-span-2 md:row-start-5 px-8 w-full bg-gray-200 rounded-xl flex justify-center items-center">
            <BuyButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
