import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

const CartContainer = () => {
  const { cartList, vaciarCarrito, eliminarItem, precioTotal } = useCartContext()
  const [formData, setFormData] = useState({
    name: '',
    tel: '',
    email: '',
    repetirEmail: ''
  })

  const initialFormData = {
    name: '',
    tel: '',
    email: '',
    repetirEmail: ''
  }

  const insertOrder = (evt) => {
    evt.preventDefault()
    if (!formData.name || !formData.tel || !formData.email || !formData.repetirEmail) {
      alert('Faltan datos en el form, ingrese devuelta')
      return
    }
    if (formData.email !== formData.repetirEmail) {
      alert('Los campos del email no son iguales')
      return
    }
    const order = {}
    order.Buyer = formData
    order.items = cartList.map(({ id, name, price }) => ({ id, name, price }))
    order.isActive = true
    order.total = precioTotal()

    const db = getFirestore()
    const ordersCollection = collection(db, 'ordenes')

    addDoc(ordersCollection, order)
      .then(resp => {
        console.log(resp);
        alert(`ORDEN DE COMPRA EXITOSA. EL ID EN FIREBASE ES: ${resp.id}`);
      })
      .catch(error => console.log(error))
      .finally(() => {
        vaciarCarrito();
        setFormData(initialFormData);
      });
  }

  const handleOnChange = (evt) => {
    console.log(evt.target.name)
    console.log(evt.target.value)
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
  }

  return (
    <>
      {cartList.length === 0 ?
        <div>
          <>
            <h2>Tu carrito esta vacio!</h2>
            <Link className="btn btn-outline-primary" to='/'>
              Ir a Home
            </Link>
          </>
        </div>
        : <div>
          <h1>Tu Carrito</h1>
          {
            cartList.map((producto, index) => (
              <div key={index}>
                <img src={producto.image} style={{ width: '100px', height: '100px' }} />
                <p>{producto.name}</p>
                <p>{producto.price}</p>
                <p>Cantidad de unidades seleccionadas: {producto.cantidad}</p>
                <button onClick={() => eliminarItem(producto.id)}>Eliminar</button>
              </div>
            ))
          }
          <p>Total a pagar: ${precioTotal()}</p>
          <form onSubmit={insertOrder}>
            <input type="text" name="name" placeholder="Ingrese nombre" onChange={handleOnChange} value={formData.name} /> <br />
            <input type="text" name="tel" placeholder="Telefono" onChange={handleOnChange} value={formData.tel} /><br />
            <input type="text" name="email" placeholder="Ingrese Email" onChange={handleOnChange} value={formData.email} /><br />
            <input type="text" name="repetirEmail" placeholder="Ingrese Email nuevamente" onChange={handleOnChange} value={formData.repetirEmail} /><br />
            <button>Generar Orden</button>
          </form><br /><br />
          <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>}
    </>
  );
};

export default CartContainer;