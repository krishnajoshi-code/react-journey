import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price.replace(",", ""));
    return sum + price;
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>🛒 Your Cart</h2>
        {cartItems.length > 0 && (
          <button onClick={clearCart} style={{
            backgroundColor: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer"
          }}>Clear Cart 🗑️</button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <p style={{ color: "#999", fontSize: "1.2rem", marginTop: "20px" }}>Your cart is empty 😔</p>
      ) : (
        <div style={{ marginTop: "20px" }}>
          {cartItems.map((item, index) => (
            <div key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: "16px",
              borderRadius: "8px",
              marginBottom: "10px",
              boxShadow: "0 1px 4px rgba(0,0,0,0.1)"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span style={{ fontSize: "2rem" }}>{item.emoji}</span>
                <h3>{item.name}</h3>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <p style={{ color: "#059669", fontWeight: "bold", fontSize: "1.1rem" }}>₹{item.price}</p>
                <button onClick={() => removeFromCart(index)} style={{
                  backgroundColor: "#fee2e2",
                  color: "#ef4444",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  cursor: "pointer"
                }}>Remove</button>
              </div>
            </div>
          ))}

          <div style={{
            marginTop: "20px",
            padding: "16px",
            backgroundColor: "#1e293b",
            color: "white",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            fontSize: "1.2rem"
          }}>
            <strong>Total:</strong>
            <strong>₹{total.toLocaleString()}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
