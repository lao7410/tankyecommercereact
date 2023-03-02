import React, { useState } from 'react';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCartContext } from "../../Context/CartContext"

const FormOfCart = ({ clearCart }) => {
    const { cartList, totalPrice } = useCartContext();
    const [formData, setFormData] = useState({
      name: "",
      tel: "",
      email: "",
      repetirEmail: "",
    });

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
        <form onSubmit={insertOrder}>
            <input type="text" name="name" placeholder="Ingrese nombre" onChange={handleOnChange} value={formData.name} /> <br /><br />
            <input type="text" name="tel" placeholder="Telefono" onChange={handleOnChange} value={formData.tel} /><br /><br />
            <input type="text" name="email" placeholder="Ingrese Email" onChange={handleOnChange} value={formData.email} /><br /><br />
            <input type="text" name="repetirEmail" placeholder="Ingrese Email nuevamente" onChange={handleOnChange} value={formData.repetirEmail} /><br /><br /><br />
            <button>Generar Orden</button>
        </form>
    )
}

export default FormOfCart
