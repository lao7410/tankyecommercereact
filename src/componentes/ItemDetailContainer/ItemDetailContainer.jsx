import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Error from "../Error/error"
import Loading from "../Spiner/Loading"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { id } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const db = getFirestore()
        const query = doc(db, 'items', id)
        getDoc(query)
            .then((resp) => {
                if (resp.exists()) {
                    setProduct({ id: resp.id, ...resp.data() })
                } else {
                    setProduct(false)
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false)) // paso la carga del load a false

    }, [id])

    return (
        loading ? <Loading /> : (
            product ? (
                <ItemDetail product={product} />
            ) : (
                <Error />
            )
        )
    )
}

export default ItemDetailContainer