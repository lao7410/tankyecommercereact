import React, { useEffect, useContext } from 'react';
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"


const CartContainer = () => {
  const { cartList, vaciarCarrito, eliminarItem, precioTotal } = useCartContext()
  useEffect(() => {

  }, [cartList])

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

          <button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
        </div>}
    </>
  );
};

export default CartContainer;