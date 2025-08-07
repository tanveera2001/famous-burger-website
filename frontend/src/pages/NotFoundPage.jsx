import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white px-4">
      <div className="text-center max-w-lg w-full border border-[#fcbf49] rounded-lg shadow-lg p-8">
        <h1 className="text-6xl font-bold text-[#d62828] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#d62828] text-white text-lg font-semibold py-2 px-4 rounded hover:bg-red-700 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
