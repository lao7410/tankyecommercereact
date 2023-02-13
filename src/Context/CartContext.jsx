import { createContext, useState, useContext } from "react";


const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    // estados y funciones globales
    const [cartList, setCartList] = useState([])

    // isInCart
    const isInCart = (id) => {
        return cartList.some(producto => producto.id === id);
    }
    function agregarCarrito(producto, cantidad) {
        setCartList(prevCart => {
            const index = prevCart.findIndex(item => item.id === producto.id);
            if (index >= 0) {
                const updatedCart = [...prevCart];
                updatedCart[index].cantidad += cantidad;
                return updatedCart;
            } else {
                return [...prevCart, {...producto, cantidad}];
            }
        });
    }
    // cantidad total
    const cantidadTotal = () => {
        return cartList.reduce((total, producto) => total + producto.cantidad, 0)
    }
    // precio total 
    const precioTotal = () => {
        return cartList.reduce((total, producto) => total + producto.price * producto.cantidad, 0)
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
                cantidadTotal,
                precioTotal,
                eliminarPorId
            }}>
            {children}
        </CartContext.Provider>
    )
}
