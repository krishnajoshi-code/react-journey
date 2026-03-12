function Navbar({ cartCount }) {
  return (
    <nav
      style={{
        backgroundColor: "#1e293b",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
      }}
    >
      <h2>🛍️ React Mart</h2>
      <div>
        <span style={{ marginRight: "20px", cursor: "pointer" }}>Home</span>
        <span style={{ marginRight: "20px", cursor: "pointer" }}>Products</span>
        <span style={{ cursor: "pointer" }}>Cart 🛒 ({cartCount})</span>
      </div>
    </nav>
  );
}

export default Navbar;
