import { useState } from "react"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ product }) => {
  const [isCount, setIsCount] = useState(true)
  const { addToCart } = useCartContext()
  const onAdd = (quant) => {
    addToCart(product, quant)
    setIsCount(false)
  }
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <img src={product.image} className='w-50' />
          <h2>{product.name}</h2>
          <h4>Categoría {product.category}</h4>
          <h4>---$ {product.price}-----</h4>
        </div>
        <div className="col-6">
          {
            isCount ?
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
              :
              <>
                <Link className="btn btn-outline-success" to='/cart'>
                  Ir a Cart
                </Link>
                <Link className="btn btn-outline-primary" to='/'>
                  Ir a Home
                </Link>
                <Link className="btn btn-outline-primary" to='/category/iphone'>
                  VOLVER IPHONE
                </Link>
                <Link className="btn btn-outline-primary" to='/category/ipad'>
                  VOLVER IPAD
                </Link>
              </>
          }
        </div>
      </div>
    </div>
  )
}
export default ItemDetail