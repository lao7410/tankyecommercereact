let productos =[
    {id:'1',nombre: 'prueba 1', description:'descripcion 1',stock: '5'},
    {id:'2',nombre: 'prueba 2', description:'descripcion 2',stock: '5'},
    {id:'3',nombre: 'prueba 3', description:'descripcion 3',stock: '5'},
    {id:'4',nombre: 'prueba 4', description:'descripcion 4',stock: '5'},
]
  
const gFetch = () => {
    return new Promise((res, rej) => {
        //acciones q la entrega va a ser asincronica
       setTimeout(()=>{
        res(productos)
       },1000)
       })
    }

export default gFetch