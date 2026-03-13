import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="p-10 text-center">
        <div className="text-5xl mb-4 animate-bounce">🛍️</div>
        <p className="text-xl text-gray-500">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-10 text-center">
        <p className="text-xl text-red-500 mb-4">Error: {error} 😔</p>
        <button onClick={() => window.location.reload()} className="bg-blue-500 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-600">Try Again 🔄</button>
      </div>
    );
  }

  return (
    <div>
      <div className="px-5 pt-5 flex justify-between items-center flex-wrap gap-4">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 text-base w-64 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        />
      </div>

      <div className="flex gap-5 p-5 flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.title}
              price={product.price}
              onAdd={() => addToCart(product)}
            />
          ))
        ) : (
          <p className="text-gray-400 text-lg">No products found 😔</p>
        )}
      </div>
    </div>
  );
}

export default Home;
