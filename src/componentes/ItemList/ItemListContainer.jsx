import { useEffect, useState } from "react"
import { getFirestore, where, query, collection, getDocs } from 'firebase/firestore'
import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Loading from "../Spiner/Loading"

export const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

   useEffect(() => {
    const db = getFirestore()
    const queryCollection = collection(db, 'items')
    const queryFilter = id ? query(queryCollection, where('category', '==', id)) : queryCollection; //ordeno querry para poder filtrar y aplico sugar

    getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() }))))
      .catch(err => console.log('error bajando de fire'))
      .finally(() => setLoading(false))
  }, [id])

    return (
    loading ? <Loading /> : (
      products !== null ? <ItemList products={products} /> : <p>Hubo un error al cargar los productos.</p>
    )
  )
}
export default ItemListContainer
