import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("cart", []);

  function addToCart(product) {
    setCartItems([...cartItems, product]);
  }

  function removeFromCart(index) {
    const newCart = cartItems.filter((_, i) => i !== index);
    setCartItems(newCart);
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

function useCart() {
  return useContext(CartContext);
}

export { CartProvider, useCart };
