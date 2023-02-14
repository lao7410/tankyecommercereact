import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ producto }) => {
  //onAdd
  const [isCount, setIsCount] = useState(true)
  const {agregarCarrito} = useCartContext()
  const onAdd = (cant) => {
    console.log(cant)
    // agragar al carrito     
    agregarCarrito(producto,cant)
    setIsCount(false)
  }

  // console.log(cartList)

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={producto.image} className='w-50' />
          <h2>Nombre: {producto.name}</h2>
          <h4>Categoría {producto.category}</h4>
          <h4>Precio {producto.price}</h4>

        </div>
        <div className="col-6">
          
          {
            isCount ?
              <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
              :
              <>
                <Link className="btn btn-outline-success" to='/cart'>
                  Ir a Cart
                </Link>
                <Link className="btn btn-outline-primary" to='/'>
                  Ir a Home
                </Link>
              </>
          }
        </div>
      </div>
      
    </div>
  )
}

export default ItemDetail