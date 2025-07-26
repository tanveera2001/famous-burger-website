import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import ItemCard from "../components/ItemCard";
import LoadingSpinner from "../components/LoadingSpinner";


const MenuPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  const fetchItems = async (signal) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/items`, {
        signal,
      });
      setItems(response.data?.payload?.items || []);
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log("Fetch canceled");
      } else {
        console.error("Error fetching items:", err);
        setError("Failed to load items.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    abortControllerRef.current = new AbortController();
    fetchItems(abortControllerRef.current.signal);
    return () => abortControllerRef.current?.abort();
  }, []);



  const handleRetry = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const newController = new AbortController();
    abortControllerRef.current = newController;

    setError(null);
    setLoading(true);
    fetchItems(newController.signal);
  };



  return (
    <main className="p-4">
      <section className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-800">Available Burgers</h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-base">Explore our mouth-watering selection of juicy burgers, grilled to perfection and crafted with fresh ingredients.</p>
      </section>
      <div className="min-h-screen flex items-center justify-center bg-white p-4">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-red-500 text-center text-lg">
            {error}
            <button onClick={handleRetry} className="ml-4 text-blue-600 underline hover:text-blue-800 transition-colors duration-200">Retry</button>
          </div>
        ) : items.length === 0 ? (
          <div className="text-center text-gray-500">No items found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (<ItemCard key={item._id} item={item} />))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MenuPage;