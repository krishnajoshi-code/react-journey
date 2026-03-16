import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="text-center p-10">
      <div className="text-8xl mb-4">😵</div>
      <h1 className="text-4xl font-bold mb-2">404</h1>
      <p className="text-gray-500 text-lg mb-6">Oops! Page not found</p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-lg no-underline hover:bg-blue-600 transition-colors">
        Go Home 🏠
      </Link>
    </div>
  );
}

export default NotFound;
