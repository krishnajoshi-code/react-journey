import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center text-white">
      <Link to="/" className="text-white no-underline">
        <h2 className="text-xl font-bold">🛍️ React Mart</h2>
      </Link>
      <div className="flex gap-5 items-center">
        <Link to="/" className="text-white no-underline hover:text-blue-300">Home</Link>
        <Link to="/about" className="text-white no-underline hover:text-blue-300">About</Link>
        <Link to="/cart" className="text-white no-underline bg-blue-600 px-3 py-1 rounded-full hover:bg-blue-500">
          Cart 🛒 ({totalItems})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
