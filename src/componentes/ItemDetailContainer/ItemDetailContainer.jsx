import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const db = getFirestore()
    const query = doc(db, 'items', id)
    getDoc(query)
      .then((resp) => {
        if (resp.exists()) {
          setProducto({ id: resp.id, ...resp.data() })
        } else {
          setProducto(false)
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false)) // paso la carga del load a false

  }, [id])

  return (
    loading
      ? <h2>Cargando...</h2> //muestra mensaje mientras trae el prod
      : <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer;