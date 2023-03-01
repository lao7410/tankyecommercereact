import { useCartContext } from "../../Context/CartContext"

const CartWidget = () => {
  const {totalQuantity} = useCartContext ()

  return (
    <>
         <div>🛒   { totalQuantity() || '' } </div>
        
    </>
  )
}

export default CartWidget
