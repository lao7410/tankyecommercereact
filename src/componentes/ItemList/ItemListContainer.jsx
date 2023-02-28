import { useEffect, useState } from "react"
import { getFirestore, where, query, collection, getDocs } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import { gFetch } from "../utils/gFetch"
import ItemList from "../ItemList/ItemList"


export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  //trae todos y filtrado segun correspo
  useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection; //ordeno querry para poder filtrar y aplico sugar
  
    getDocs(queryFilter)
      .then(resp => setProductos(resp.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(err => console.log('error al traer productos'))
      .finally(() => setLoading(false))
  }, [id])

 

  console.log(productos)

  return (

    loading
      ?
      <h2>Cargando...</h2>
      :
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }} >
        <ItemList productos={productos} />
      </div>
  )
}


