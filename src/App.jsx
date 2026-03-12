import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = cartCount > 0 ? `(${cartCount}) React Mart` : "React Mart";
  }, [cartCount]);

  useEffect(() => {
    setTimeout(() => {
      const fakeProducts = [
        { id: 1, emoji: "👟", name: "Nike Shoes", price: "4,999" },
        { id: 2, emoji: "👕", name: "Casual T-Shirt", price: "799" },
        { id: 3, emoji: "🎧", name: "Wireless Headphones", price: "2,499" },
        { id: 4, emoji: "⌚", name: "Smart Watch", price: "3,499" },
        { id: 5, emoji: "🎒", name: "Laptop Bag", price: "1,299" },
        { id: 6, emoji: "🕶️", name: "Sunglasses", price: "999" },
      ];
      setProducts(fakeProducts);
      setLoading(false);
    }, 1500);
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Navbar cartCount={cartCount} />

      <div style={{ flexGrow: 1 }}>
        <div
          style={{
            padding: "20px 20px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Our Products</h2>
          <input
            type="text"
            placeholder="🔍 Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "1rem",
              width: "250px",
              outline: "none",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "10px 20px",
            flexWrap: "wrap",
          }}
        >
          {loading ? (
            <p style={{ fontSize: "1.5rem", color: "#666" }}>
              Loading products... ⏳
            </p>
          ) : filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                emoji={product.emoji}
                name={product.name}
                price={product.price}
                onAdd={() => setCartCount(cartCount + 1)}
              />
            ))
          ) : (
            <p style={{ color: "#999", fontSize: "1.2rem" }}>
              No products found 😔
            </p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
