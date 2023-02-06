import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Loading from "../Spiner/Loading"
import gFetch from "../utils/gfetch"


export const ItemDetail = (productos) => {
  const [producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const { idCategory, idProduct } = useParams()

  useEffect(() => {
    gFetch()
      .then(res => {
        setProducto(res.find(productos => productos.id === idProduct))

      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [idProduct])


  return (
    <div>
      {loading && <Loading />}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>

        <h1>{producto.name}</h1>
        <p>{producto.description}</p>
        <p>{producto.price}</p>
      </div>
    </div>
  );
}

export default ItemDetail