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
    const quantityUpd = (id, newQuantity) => {
        const index = cartList.findIndex(product => product.id === id);
        const maxQuantity = cartList[index].stock;
        let quantityUpd = Math.min(Math.max(newQuantity, 1), maxQuantity);
        cartList[index].quantity = quantityUpd;
        setCartList([...cartList]);
      }
    
        /* if (newCartList[index].quantity + amount <= 0) {
            // Si la cantidad después de la actualización es cero o negativa,
            // elimina el producto del carrito.
            deleteItem(id)
            return
        }
    
        if (newCartList[index].quantity + amount > newCartList[index].stock) {
            // Si la cantidad después de la actualización es mayor que el stock disponible,
            // establece la cantidad en el stock disponible.
            newCartList[index].quantity = newCartList[index].stock
        } else {
            // De lo contrario, aumenta o disminuye la cantidad según el valor de "amount".
            newCartList[index].quantity += amount
        }
    
        setCartList(newCartList) */
    

   /*  const increaseQuantity = (id) => { 
        const index = cartList.findIndex(product => product.id === id)
        if (cartList[index].quantity < cartList[index].stock) {
            cartList[index].quantity += 1
        }
        setCartList([...cartList])
    }

    const decreaseQuantity = (id) => { // similar to increase quantity pero para abajo, preguntar si se puede aplicar en una misma funcion
        const index = cartList.findIndex(product => product.id === id)
        if (cartList[index].quantity > 1) {
            cartList[index].quantity -= 1 //baja el prod sin vaciar cart
        } else {
            deleteItem(id)
        }
        setCartList([...cartList])
    } */

    const clearCart = () => setCartList([])
    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                quantityUpd,
                /* increaseQuantity,
                decreaseQuantity, */
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