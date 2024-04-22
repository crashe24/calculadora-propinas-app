import { useMemo } from "react"
import { formatCurrency } from "../../helpers/index"
import { OrderItem } from "../../types/index"

type OrdetTotalProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: ()=>void
}

const OrderTotalsComponent = ({order,tip, placeOrder}:OrdetTotalProps) => {

  const subTotal = useMemo(() => order.reduce( 
                                    (total, item) => total + (item.quantity*item.price),0
                                    ),
                    [order])

  const tipAmount = useMemo( ()=> subTotal*tip , [tip,order])
  const total = useMemo( ()=> subTotal + tipAmount , [tip,order])
  return (
      <>
        <div className='space-y-3'>
            <h2 className='font-black text-2xl'>Totales y Propina</h2>
            <p>Subtotal a pagar: {' '} <span className='font-bold'> {formatCurrency(subTotal)}</span></p>
            <p>Propina: {' '} <span className='font-bold'>{formatCurrency(tipAmount)}</span></p>
            <p>Total a pagar: {' '} <span className='font-bold'>{formatCurrency(total)}</span></p>
        </div>
        <button className='w-full bg-black p-3 text-white uppercase font-bold mt-10
         disabled:opacity-10'
        disabled={total ===0 }
        onClick={placeOrder}>Guardar Orden</button>
      </>
  )
}

export default OrderTotalsComponent