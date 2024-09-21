import { IProduct } from "@/interfaces/product";
import { IoCalendarClearOutline } from "react-icons/io5";

interface ICardOrder {
  date: string;
  orders: IProduct[];
}
const CartOrder = ({ date, orders }: ICardOrder) => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div>
        {orders &&
          orders.map((product) => (
            <div
              key={product.id}
              className="mb-4 p-4 border border-gray-200 rounded-lg grid grid-cols-2 items-center gap-4"
            >
              <div className="flex flex-col">
                <h4 className="text-xl font-bold">Orden #{product.id}</h4>
                <p className="text-sm text-gray-500 flex items-center">
                  <IoCalendarClearOutline className="mr-1 h-4 w-4" />
                  {formatDate(date)}
                </p>
              </div>
              <div className="flex flex-col">
                <p>{product.name}</p>
                <div className="flex items-center gap-4">
                    <p>${product.price}</p>
                    <p className="text-sm text-green-400 border border-gray-200 px-2 rounded-xl">Entregado</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CartOrder;
