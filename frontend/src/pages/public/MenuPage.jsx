import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../components/Card";
import Button from "../../components/Button";
import { API_BASE_URL } from "../../config/config";

const MenuPage = () => {
  const [burgers, setBurgers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const ITEMS_PER_PAGE = 9; // You can adjust this

  // Fetch burgers for the current page
  const fetchBurgers = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_BASE_URL}/api/items`, {
        params: { page, limit: ITEMS_PER_PAGE },
      });

      // Assuming backend returns pagination info
      setBurgers(response.data.payload.items);
      setTotalPages(response.data.payload.pagination.totalPages || 1);
    } catch (err) {
      console.error(err);
      setError("Failed to load burgers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBurgers(currentPage);
  }, [currentPage]);

  const handlePrev = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="max-w-[1024px] mx-auto px-4 sm:px-6 md:px-8 mt-16 mb-16">
      <h2 className="text-4xl font-extrabold text-zinc-800 text-center mb-10">
        Full <span className="text-orange-500">Menu</span>
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          <p className="col-span-full text-center text-zinc-500">Loading...</p>
        ) : error ? (
          <p className="col-span-full text-center text-red-500">{error}</p>
        ) : burgers.length === 0 ? (
          <p className="col-span-full text-center text-zinc-500">
            No burgers available right now.
          </p>
        ) : (
          burgers.map((burger) => (
            <Card
              key={burger._id}
              title={burger.title}
              price={burger.price}
              image={burger.image}
            />
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-4">
        <Button content="Prev" onClick={handlePrev} disabled={currentPage === 1} />
        <span className="flex items-center text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <Button content="Next" onClick={handleNext} disabled={currentPage === totalPages} />
      </div>
    </div>
  );
};

export default MenuPage;
