import { createContext, useState, useContext } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)
export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const isInCart = (id) => {
        return cartList.some(product => product.id === id)
    }
    function addToCart(product, quantity) {
        setCartList(prevCart => {
            const index = prevCart.findIndex(item => item.id === product.id);
            if (index >= 0) {
                const updatedCart = [...prevCart]
                updatedCart[index].quantity = Math.min(quantity + updatedCart[index].quantity, product.stock)
                return updatedCart
            } else {
                return [...prevCart, { ...product, quantity: Math.min(quantity, product.stock) }] 
            }
        })
    }

    const totalQuantity = () => {
        return cartList.reduce((total, product) => total + product.quantity, 0)
    }
    const totalPrice = () => {
        return cartList.reduce((total, product) => total + product.price * product.quantity, 0)
    }

    const deleteById = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }

    const deleteItem = (id) => {
        setCartList(cartList.filter(product => product.id !== id))
    }
    const increaseQuantity = (id) => { 
        const index = cartList.findIndex(product => product.id === id)
        if (cartList[index].quantity < cartList[index].stock) {
            cartList[index].quantity += 1
        }
        setCartList([...cartList])
    }

    const decreaseQuantity = (id) => { // similar to increase quantity pero para abajo
        const index = cartList.findIndex(product => product.id === id)
        if (cartList[index].quantity > 1) {
            cartList[index].quantity -= 1 //baja el prod sin vaciar cart
        } else {
            deleteItem(id)
        }
        setCartList([...cartList])
    }

    const clearCart = () => setCartList([])
    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                increaseQuantity,
                decreaseQuantity,
                clearCart,
                deleteItem,
                totalQuantity,
                totalPrice,
                deleteById
            }}>
            {children}
        </CartContext.Provider>
    )
}