import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => {
    const price = typeof item.price === "string" ? Number(item.price.replace(",", "")) : item.price;
    return sum + price;
  }, 0);

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
          <p className="text-gray-400 text-lg">Your cart is empty 😔</p>
        </div>
      ) : (
        <div className="mt-5">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between items-center bg-white p-4 rounded-lg mb-3 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                <h3 className="text-sm font-semibold max-w-xs">{item.title}</h3>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-emerald-600 font-bold">${Number(item.price).toFixed(2)}</p>
                <button onClick={() => removeFromCart(index)} className="bg-red-50 text-red-500 border-none px-3 py-1 rounded-md cursor-pointer hover:bg-red-100 transition-colors">Remove</button>
              </div>
            </div>
          ))}

          <div className="mt-5 p-4 bg-slate-800 text-white rounded-lg flex justify-between text-lg">
            <strong>Total:</strong>
            <strong>${Number(total).toFixed(2)}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
