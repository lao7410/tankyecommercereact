import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    // isInCart

    const agregarCarrito = (newProducto) => {
        // VAlidar si está el producto
        setCartList([
            ...cartList,
            newProducto
        ])

    }

    // cantidad total
    const cantidadTotal = () => {
        return cartList.reduce((total, producto) => total + producto.cantidad, 0)
    }
    // precio total 
    const precioTotal = () => {
        return cartList.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)
    }

    // eliminar item por id
    const eliminarPorId = (id) => {
        setCartList(cartList.filter(producto => producto.id !== id))
    }

    //elimnar Item
    const eliminarItem = (id) => {
        setCartList(cartList.filter(producto => producto.id !== id))
    }

    const vaciarCarrito = () => setCartList([])

    return (
        <CartContext.Provider
            value={{
                cartList,
                agregarCarrito,
                vaciarCarrito,
                eliminarItem,
                eliminarPorId
            }}>
            {children}
        </CartContext.Provider>
    )
}
