import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetail({ showToast }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  }, [id]);

  function handleAdd() {
    addToCart(product);
    setAdded(true);
    showToast(`${product.title.slice(0, 20)}... added to cart! ✅`);
    setTimeout(() => setAdded(false), 1500);
  }

  if (loading) {
    return <p className="p-10 text-center text-xl text-gray-500">Loading... ⏳</p>;
  }

  return (
    <div className="p-5 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 no-underline hover:text-blue-700">← Back to Products</Link>

      <div className="flex gap-10 mt-5 flex-wrap">
        <div className="flex-1 min-w-[250px] bg-white rounded-xl p-5 text-center shadow-md">
          <img src={product.image} alt={product.title} className="max-w-full max-h-[350px] object-contain" />
        </div>

        <div className="flex-1 min-w-[250px]">
          <h1 className="text-2xl font-bold mb-3">{product.title}</h1>

          <div className="flex items-center gap-3 mb-3">
            <span className="bg-amber-100 px-3 py-1 rounded-full text-sm">⭐ {product.rating.rate}</span>
            <span className="text-gray-400 text-sm">({product.rating.count} reviews)</span>
          </div>

          <p className="text-emerald-600 font-bold text-3xl mb-3">${product.price}</p>

          <p className="text-gray-500 leading-relaxed mb-5">{product.description}</p>

          <p className="mb-5">
            <strong>Category: </strong>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">{product.category}</span>
          </p>

          {added ? (
            <button className="bg-green-600 text-white border-none py-3 px-8 rounded-lg text-lg">Added ✅</button>
          ) : (
            <button onClick={handleAdd} className="bg-blue-500 text-white border-none py-3 px-8 rounded-lg cursor-pointer text-lg hover:bg-blue-600 transition-colors">Add to Cart 🛒</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
