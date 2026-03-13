import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Home({ products }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ padding: "20px 20px 0px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

      <div style={{ display: "flex", gap: "20px", padding: "10px 20px", flexWrap: "wrap" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              emoji={product.emoji}
              name={product.name}
              price={product.price}
              onAdd={() => addToCart(product)}
            />
          ))
        ) : (
          <p style={{ color: "#999", fontSize: "1.2rem" }}>No products found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Home;
