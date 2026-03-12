import { useState } from "react";

function ProductCard({ emoji, name, price, onAdd }) {
  const [added, setAdded] = useState(false);

  function handleClick() {
    setAdded(true);
    onAdd();
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "12px",
        padding: "16px",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "220px",
      }}
    >
      <div style={{ fontSize: "4rem" }}>{emoji}</div>
      <h3>{name}</h3>
      <p style={{ color: "#059669", fontWeight: "bold", fontSize: "1.2rem" }}>
        ₹{price}
      </p>

      {added ? (
        <button
          style={{
            backgroundColor: "#16a34a",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "8px",
            marginTop: "8px",
          }}
        >
          Added ✅
        </button>
      ) : (
        <button
          onClick={handleClick}
          style={{
            backgroundColor: "#3b82f6",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            marginTop: "8px",
          }}
        >
          Add to Cart 🛒
        </button>
      )}
    </div>
  );
}

export default ProductCard;
