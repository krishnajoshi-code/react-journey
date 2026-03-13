import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav style={{
      backgroundColor: "#1e293b",
      padding: "16px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <h2>🛍️ React Mart</h2>
      </Link>
      <div>
        <Link to="/" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>Home</Link>
        <Link to="/about" style={{ color: "white", textDecoration: "none", marginRight: "20px" }}>About</Link>
        <Link to="/cart" style={{ color: "white", textDecoration: "none" }}>Cart 🛒 ({cartItems.length})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
