import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import ItemsOfCart from './ItemsOfCart'
import FormOfCart from './FormOfCart'

const CartContainer = () => {
  const { cartList, clearCart, totalPrice } = useCartContext()
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

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value
    })
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

  return (
    <div>
      {cartList.length === 0 ?
        <div>
          <h1>Tu carrito esta vacio</h1>
          <Link to="/">Volver al listado de productos</Link>
        </div>
        :
        <div>
          <ItemsOfCart />
          <p>Total: ${totalPrice()},00</p>
          <FormOfCart clearCart={clearCart} formData={formData} handleOnChange={handleOnChange} insertOrder={insertOrder} />
          <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
      }
    </div>
  )
}

export default CartContainer
