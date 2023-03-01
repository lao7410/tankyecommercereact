import { useEffect, useState } from "react"
import { getFirestore, where, query, collection, getDocs } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"

export const ItemListContainer = () => {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const { id } = useParams()

// retrieve all products and filter by category if applicable
useEffect(() => {
const db = getFirestore()
const queryCollection = collection(db, 'items')
const queryFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection; //ordeno querry para poder filtrar y aplico sugar
  
getDocs(queryFilter)
.then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
.catch(err => console.log('error fetching products'))
.finally(() => setLoading(false))
  }, [id])

   console.log(products)
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
        <ItemList products={products} />
      </div>
  )
}

export default ItemListContainer
