import { useEffect, useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { CartProvider, useCart } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";

function AppContent() {
  const { totalItems } = useCart();
  const [toast, setToast] = useState({ show: false, message: "" });

  useEffect(() => {
    document.title = totalItems > 0 ? `(${totalItems}) React Mart` : "React Mart";
  }, [totalItems]);

  function showToast(message) {
    setToast({ show: true, message });
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/product/:id" element={<ProductDetail showToast={showToast} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <Toast message={toast.message} show={toast.show} onClose={() => setToast({ show: false, message: "" })} />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </HashRouter>
  );
}

export default App;
