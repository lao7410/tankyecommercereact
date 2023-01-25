import { useEffect, useState } from "react"
import { gFetch }   from  "..utils/gFetch"

export const ItemListContainer = () => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)



  useEffect(()=>{
    gFetch()
      .then(res => {      
        setProductos(res)
        // debe hacer una sola cosa
      })
      .catch(error => console.log(error))
      .finally(()=> setLoading(false))
  }, [])

  console.log(productos)

  // [1,2,3,4] -> [ <li>{1}</li>, <li>{2}</li>, ....]
  return (
    <center>
        { loading ? <h2>Cargando...</h2> 
          : 
          productos.map( producto =>   <div key={producto.id} className='card w-25 mt-2' >
                                        <div className='card-header'>
                                          Nombre: {producto.name}
                                        </div>
                                        <div className='card-body'>
                                          <img src={producto.foto} alt='foto' className="w-100"/>
                                          Categoria: {producto.categoria}<br/>
                                          Precio: {producto.price}
                                        </div>
                                        <div className='card-footer'>
                                          <button className="btn btn-outline-primary w-100">Detalle</button>
                                        </div>

                                      </div>) }

    </center>
   
  )
}

