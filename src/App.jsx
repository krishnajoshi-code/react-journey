import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";

const allProducts = [
  { id: 1, emoji: "👟", name: "Nike Shoes", price: "4,999" },
  { id: 2, emoji: "👕", name: "Casual T-Shirt", price: "799" },
  { id: 3, emoji: "🎧", name: "Wireless Headphones", price: "2,499" },
  { id: 4, emoji: "⌚", name: "Smart Watch", price: "3,499" },
  { id: 5, emoji: "🎒", name: "Laptop Bag", price: "1,299" },
  { id: 6, emoji: "🕶️", name: "Sunglasses", price: "999" },
];

function AppContent() {
  const { cartItems } = useCart();

  useEffect(() => {
    document.title = cartItems.length > 0 ? `(${cartItems.length}) React Mart` : "React Mart";
  }, [cartItems]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{ flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home products={allProducts} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
