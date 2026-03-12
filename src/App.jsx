import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Footer from "./components/footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar cartCount={cartCount} />

      <div style={{ flexGrow: 1 }}>
        <h2 style={{ padding: "20px 20px 10px" }}>Our Products</h2>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "10px 20px",
            flexWrap: "wrap",
          }}
        >
          <ProductCard
            emoji="👟"
            name="Nike Shoes"
            price="4,999"
            onAdd={() => setCartCount(cartCount + 1)}
          />
          <ProductCard
            emoji="👕"
            name="Casual T-Shirt"
            price="799"
            onAdd={() => setCartCount(cartCount + 1)}
          />
          <ProductCard
            emoji="🎧"
            name="Wireless Headphones"
            price="2,499"
            onAdd={() => setCartCount(cartCount + 1)}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
