import { formatCurrency } from "../../helpers/index"
import type {  MenuItem, OrderItem } from "../../types/index" 

type OrderProps = {
    order: OrderItem[],
    removeItem: (id:MenuItem['id']) => void
}

const OrderContents = ({order, removeItem}:OrderProps) => {
  
  return (
    <div>
        <h2 className= 'font-black text-4xl'>Consumo</h2>
        <div className='space-y-3 mt-10'>
            {
              order.map( item =>(
                    <div key={item.id} 
                      className='flex justified-between items-center border-t border-gray-200 py-5 last-of-type:border-b'
                    >
                      <div >
                        <p className="text-lg">
                          {item.name} - {formatCurrency(item.price)}
                        </p>
                      </div>
                      
                      <p className="font-black">
                        Cantidad - {item.quantity} - {formatCurrency(item.quantity*item.price)}
                      </p>
                      <button 
                        className='bg-red-600 h-8 w-8 rounded-full text-white font-black'
                        onClick = { () => removeItem(item.id)}
                        >X</button>
                    </div>
              ))
            
            
            }
        </div>

    </div>
  )
}


export { OrderContents }