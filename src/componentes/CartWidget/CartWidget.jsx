import { useCartContext } from "../../Context/CartContext"

const CartWidget = () => {
  const {cantidadTotal} = useCartContext ()

  return (
    <>
         <div>🛒   { cantidadTotal() || '' } </div>
        
    </>
  )
}

export default CartWidget
