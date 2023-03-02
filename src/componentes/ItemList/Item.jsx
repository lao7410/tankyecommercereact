import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className='card w-25 mt-2' >
                  <Link to={`/item/${product.id}`}>
                    <div className='card-header'>
                      {product.name}
                    </div>
                    <div className='card-body'>
                      <img src={product.image} alt='foto' className="w-100"/>
                      Categoria: {product.category}<br/>
                      $ {product.price}
                    </div>
                    <div className='card-footer'>
                        { <button className="btn btn-outline-primary w-100">Detalle</button> }
                    </div>
                  </Link>

                </div>
  )
}

export default Item
