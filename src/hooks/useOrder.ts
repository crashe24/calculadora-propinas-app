import { useState } from "react"
import type { OrderItem } from "../types"
import { MenuItem } from "../types/index"

const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)
 
    const addItem = (item: MenuItem) => {
        const itemExist = order.find(oItem => oItem.id === item.id)

        if (itemExist) {
            const updateOrder = order.map(oI => oI.id === item.id 
                ? {...oI, quantity: oI.quantity +1} 
                : oI )

            setOrder(updateOrder)
        }
        else {
            const newItem : OrderItem = {...item, quantity:1}
        setOrder([...order, newItem])
        }
        
    }

    const removeItem = (id: MenuItem['id']) => {
        setOrder(order.filter( item => item.id !== id))
    }

    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }
    return {order, tip,setTip, addItem,removeItem, placeOrder}
}

export {useOrder}