import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

const CartContainer = () => {
  const { cartList, clearCart, deleteItem, totalPrice, quantityUpd } = useCartContext()
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
    order.items = cartList.map(({ id, name, price, quantity }) => ({ id, name, price, quantity }))
    order.isActive = true
    order.total = totalPrice()

    const db = getFirestore()
    const ordersCollection = collection(db, 'ordenes')

    addDoc(ordersCollection, order)
      .then(resp => {
        alert(`ORDEN DE COMPRA EXITOSA. EL ID EN FIREBASE ES: ${resp.id}`)
      })
      .catch(error => console.log(error))
      .finally(() => {
        clearCart()
        setFormData(initialFormData)
      })
  }

  const handleOnChange = (evt) => {
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
            cartList.map((product, index) => (
              <div key={index}>
                <img src={product.image} style={{ width: '100px', height: '100px' }} />
                <p>Nombre del producto "{product.name}"</p>
                <p>Precio Unitario ${product.price},00</p>
                <p>Cantidad de unidades seleccionadas: {product.quantity}</p>
                <button onClick={() => quantityUpd(product.id, product.quantity + 1)}>+</button>
                <button onClick={() => quantityUpd(product.id, product.quantity - 1)}>-</button> <br />
                <button onClick={() => deleteItem(product.id)}>Eliminar</button>
              </div>
            ))
          }
          <p>Total a pagar: ${totalPrice()}</p>
          <form onSubmit={insertOrder}>
            <input type="text" name="name" placeholder="Ingrese nombre" onChange={handleOnChange} value={formData.name} /> <br />
            <input type="text" name="tel" placeholder="Telefono" onChange={handleOnChange} value={formData.tel} /><br />
            <input type="text" name="email" placeholder="Ingrese Email" onChange={handleOnChange} value={formData.email} /><br />
            <input type="text" name="repetirEmail" placeholder="Ingrese Email nuevamente" onChange={handleOnChange} value={formData.repetirEmail} /><br /><br />
            <button>Generar Orden</button>
          </form><br /><br />
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>}
    </>
  )
}

export default CartContainer