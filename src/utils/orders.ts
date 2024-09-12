const apiURL = process.env.NEXT_PUBLIC_API_URL

export const createOrder = async (products: number [], token: string) => {
     try {
        const res = await fetch(`${apiURL}/orders`, {
            method: "POST",
            headers:{
                "Content-Type": "application/json",
                Authorization: token,
            },
            body: JSON.stringify({products})
        })

        const orders = await res.json()
        return orders
     } catch (error: any) {
        throw new Error(error)
     }
}

export const getOrders = async( token: string) => {
    try {
        const res = await fetch(`${apiURL}/users/orders`, {
            method: "GET",
            headers:{
                "Content-Type": "application/json",
                Authorization: token,
            }},)
        const orders = await res.json()
        return orders
    } catch (error: any) {
        throw new Error (error)
    }
}