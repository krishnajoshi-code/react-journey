import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({ id, image, name, price, onAdd }) {
  const [added, setAdded] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setAdded(true);
    onAdd();
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div className="bg-white rounded-xl p-4 text-center shadow-md w-56 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <Link to={`/product/${id}`} className="no-underline text-inherit">
        <img src={image} alt={name} className="w-full h-40 object-contain" />
        <h3 className="text-sm mt-3 min-h-[40px] font-semibold text-gray-800">{name}</h3>
      </Link>
      <p className="text-emerald-600 font-bold text-lg my-2">${price}</p>

      {added ? (
        <button className="bg-green-600 text-white border-none py-2 px-5 rounded-lg">Added ✅</button>
      ) : (
        <button onClick={handleClick} className="bg-blue-500 text-white border-none py-2 px-5 rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">Add to Cart 🛒</button>
      )}
    </div>
  );
}

export default ProductCard;
