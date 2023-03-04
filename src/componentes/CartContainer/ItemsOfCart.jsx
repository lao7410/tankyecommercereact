import React from 'react'
import { useCartContext } from '../../Context/CartContext'

const ItemsOfCart = () => {
    const { cartList, quantityUpd, deleteItem } = useCartContext()

    return (
        <>
            {cartList.map((product, index) => (
                <div key={index}>
                    <img src={product.image} style={{ width: '100px', height: '100px' }} />
                    <p>Nombre del producto "{product.name}"</p>
                    <p>Precio Unitario ${product.price},00</p>
                    <p>Cantidad de unidades seleccionadas: {product.quantity}</p>
                    <p>Subtotal del item seleccionado: ${product.price * product.quantity} </p>
                    <button onClick={() => quantityUpd(product.id, product.quantity + 1)}>+</button>
                    <button onClick={() => quantityUpd(product.id, product.quantity - 1)}>-</button> <br />
                    <button onClick={() => deleteItem(product.id)}>Eliminar</button>
                </div>
            ))}
        </>
    )
}

export default ItemsOfCart