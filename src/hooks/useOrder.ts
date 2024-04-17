import { useState } from "react"
import type { OrderItem } from "../types"
import { MenuItem } from "../types/index"

const useOrder = () => {

    const [order, setOrder] = useState<OrderItem[]>([])
 
    const addItem = (item: MenuItem) => {
        console.log('addItem cargando', item)
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

    console.log('order', order)
    return {addItem, order}
}

export {useOrder}