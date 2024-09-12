import { IProduct } from "@/interfaces/product"

interface ICardOrder {
    date: string,
    orders: IProduct[],
}
const CartOrder = ({date, orders }: ICardOrder) => {

    return (
        <div>
            <h2>{date}</h2> 
            <div>
                {orders &&
                orders.map((product) => (
                    <div key={product.id}>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
 
export default CartOrder