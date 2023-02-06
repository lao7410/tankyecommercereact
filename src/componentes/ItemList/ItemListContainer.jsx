import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import gFetch from "../utils/gfetch"
import Loading from "../Spiner/Loading"

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      gFetch()
        .then(res => {
          setProductos(res.filter(producto => producto.category === id))
          console.log(productos)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))

    } else {
      gFetch()
        .then(res => {
          setProductos(res)
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
    }

  }, [id])

  return (
    <div>
      {loading && <Loading />}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        {productos.map(producto => <div key={producto.id} className='card w-25 mt-2'>
          <Link to={`/item/${producto.id}`}>
            <div className='card-header'>
              Nombre: {producto.name}
            </div>
            <div className='card-body'>
              <img src={producto.image} alt='foto' className="w-100" />
              Categoria: {producto.category}<br />
              Precio: {producto.price}
            </div>
            <div className='card-footer'>
              <button className="btn btn-outline-primary w-100">Detalle</button>
            </div>
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default ItemListContainer