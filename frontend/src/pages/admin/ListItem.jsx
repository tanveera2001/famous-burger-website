import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { API_BASE_URL } from "../../config/config";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import LoadingSpinner from "../../components/ItemCard";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
	const [items, setItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const abortControllerRef = useRef(null);

	const navigate = useNavigate();

	const fetchItems = async (signal) => {
		try {
			const res = await axios.get(`${API_BASE_URL}/api/items`, { signal });
			setItems(res.data?.payload?.items || []);
		} catch (err) {
			if (axios.isCancel(err)) {
				console.log("Request canceled");
			} else {
				console.error("Failed to fetch items:", err);
				setError("Failed to load items.");
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		abortControllerRef.current = new AbortController();
		fetchItems(abortControllerRef.current.signal);

		return () => {
			abortControllerRef.current?.abort();
		};
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

	const handleDelete = async (id) => {
		const confirmed = window.confirm("Are you sure you want to delete this item?");
		if (!confirmed) return;

		try {
			setLoading(true);
			await axios.delete(`${API_BASE_URL}/api/items/${id}`);
			setItems((prevItems) => prevItems.filter(item => item._id !== id));
			alert("Item deleted successfully!");
		} catch (err) {
			console.error("Failed to delete item:", err);
			alert("Failed to delete item. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="w-full max-w-screen-2xl mx-auto mt-12 bg-white border border-[#fcbf49] rounded-lg shadow-lg px-10 py-10">
			<h1 className="text-3xl font-bold mb-6 text-center text-[#d62828]">All Items</h1>

			{loading ? (
				<LoadingSpinner />
			) : error ? (
				<div className="text-red-600 text-center text-lg font-medium">
					{error}
					<button onClick={handleRetry} className="ml-4 text-blue-700 underline hover:text-blue-900">
						Retry
					</button>
				</div>
			) : items.length === 0 ? (
				<div className="text-center text-gray-500 font-medium">No items available.</div>
			) : (
				<div className="overflow-x-auto">
					<table className="w-full text-sm text-left text-gray-700">
						<thead className="text-xs uppercase bg-[#fefae0] text-[#3a5a40]">
							<tr>
								<th className="px-6 py-3">Image</th>
								<th className="px-6 py-3">Title</th>
								<th className="px-6 py-3">Price</th>
								<th className="px-6 py-3">Action</th>
							</tr>
						</thead>
						<tbody>
							{items.map((item) => (
								<tr key={item._id} className="bg-white border-b hover:bg-[#fefae0]">
									<td className="p-4">
										<img src={`${API_BASE_URL}/${item.image}`} alt={item.title} className="w-20 h-20 object-contain block" />
									</td>
									<td className="px-6 py-4 font-semibold text-gray-900">{item.title}</td>
									<td className="px-6 py-4 font-semibold text-gray-900">Tk. {item.price}</td>
									<td className="px-6 py-4">
										<div className="flex space-x-4">
											<button
												onClick={() => navigate(`/admin-panel/update-item/${item._id}`)}
												className="text-blue-600 hover:text-blue-800"
												title="Edit"
											>
												<FaEdit size={20} />
											</button>
											<button
												onClick={() => handleDelete(item._id)}
												className="text-red-600 hover:text-red-800"
												title="Delete"
											>
												<MdDelete size={20} />
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
};

export default ListItem;
