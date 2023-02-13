import React, { useEffect, useContext } from 'react';
import { useCartContext } from "../../Context/CartContext"

const CartContainer = () => {
  const { cartList, agregarCarrito, vaciarCarrito, eliminarItem } = useCartContext();

  useEffect(() => {

  }, [cartList])

  return (
    <div>
      <h1>extoy en cart</h1>
      {
        cartList.map((producto, index) => (
          <div key={index}>
            <img src={producto.image} style={{width:'100px',height:'100px'}}  />
            <p>{producto.name}</p>
            <p>{producto.price}</p>
            <p>Unidades seleccionadas </p>
            <button onClick={() => eliminarItem(producto.id)}>Eliminar</button>
            <button onClick={() => vaciarCarrito}>Vaciar Carrito</button>
          </div>

        ))
      }
    </div>
  );
};

export default CartContainer;