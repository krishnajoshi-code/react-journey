import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">🛒 Your Cart</h2>
        {cartItems.length > 0 && (
          <button onClick={clearCart} className="bg-red-500 text-white border-none px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600 transition-colors">
            Clear Cart 🗑️
          </button>
        )}
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <div className="text-6xl mb-4">🛒</div>
          <p className="text-gray-400 text-lg mb-4">Your cart is empty 😔</p>
          <Link to="/" className="bg-blue-500 text-white px-5 py-2 rounded-lg no-underline hover:bg-blue-600">
            Continue Shopping 🛍️
          </Link>
        </div>
      ) : (
        <div className="mt-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                <div>
                  <h3 className="text-sm font-semibold max-w-xs">{item.title}</h3>
                  <p className="text-emerald-600 font-bold">${item.price}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="bg-gray-200 border-none w-8 h-8 rounded-full cursor-pointer text-lg hover:bg-gray-300">-</button>
                  <span className="font-bold text-lg w-8 text-center">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="bg-gray-200 border-none w-8 h-8 rounded-full cursor-pointer text-lg hover:bg-gray-300">+</button>
                </div>
                <p className="text-emerald-600 font-bold w-20 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                <button onClick={() => removeFromCart(item.id)} className="bg-red-50 text-red-500 border-none px-3 py-1 rounded-md cursor-pointer hover:bg-red-100 transition-colors">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-5 p-4 bg-slate-800 text-white rounded-lg flex justify-between text-lg">
            <strong>Total:</strong>
            <strong>${total.toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
