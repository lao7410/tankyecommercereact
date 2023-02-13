import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { gFetch } from "../utils/gFetch"
import ItemList from "../ItemList/ItemList"


export const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  const { id } = useParams()

  useEffect(()=>{
    if (id) {
      gFetch()
        .then(res => {      
          setProductos(res.filter(producto => producto.category === id))
          // debe hacer una sola cosa
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))      
    } else {
      gFetch()
        .then(res => {      
          setProductos(res)
          // debe hacer una sola cosa
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
      
    }
  }, [id])

 
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


