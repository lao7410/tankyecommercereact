import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {gFetchOne} from "../utils/gFetch"
import ItemDetail from "./ItemDetail"
import Loading from "../Spiner/Loading"


const ItemDetailContainer = () => {
    const [ producto, setProducto ] =  useState({})
    const { id } = useParams()
    const [loadinng, setLoading] = useState(true)
    // console.log(idProducto)

    useEffect(()=>{        
        if(id){
        gFetchOne(id)
        .then(response => setProducto(response))
        .catch(error => setProducto(error))
        }else{
            gFetchOne()
            .then(res=>setProducto(res))
            .catch(error=>console.log(error))
            .finally(()=>setLoading(false))
        }
    }, [id])

  // mocks con id 
    return (
        <div 
        // className="border border-5 border-danger  m-3"
        >        
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
