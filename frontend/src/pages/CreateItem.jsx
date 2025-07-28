import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import Input from "../components/Input";
import { Loader, Tag, DollarSign, Image } from "lucide-react";

const CreateItem = () => {
	const navigate = useNavigate();
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [image, setImage] = useState(null);
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError("");
		setIsLoading(true);

		if (!title || !price || !image) {
			setError("All fields are required.");
			setIsLoading(false);
			return;
		}

		const formData = new FormData();
		formData.append("title", title);
		formData.append("price", price);
		formData.append("image", image);

		try {
			await axios.post(`${API_BASE_URL}/api/items/create-item`, formData);
			navigate("/admin-panel/list-item");
		} catch (err) {
			setError("Failed to create item.");
			console.error(err);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="max-w-md w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
			<div className="p-8">
				<h2 className="text-3xl font-bold mb-6 text-center text-[#d62828]">
					Create Item
				</h2>

				<form onSubmit={handleSubmit} encType="multipart/form-data">
					<Input
						icon={Tag}
						type="text"
						placeholder="Item Title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>

					<Input
						icon={DollarSign}
						type="number"
						placeholder="Price"
						value={price}
						onChange={(e) => setPrice(e.target.value)}
					/>

					<div className="relative mb-6">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<Image className="size-5 text-gray-500" />
						</div>
						<input
							type="file"
							accept="image/*"
							className="w-full pl-10 pr-3 py-2 bg-white text-gray-800 placeholder-gray-400 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#3a5a40] focus:border-[#3a5a40] transition"
							onChange={(e) => setImage(e.target.files[0])}
						/>
					</div>

					{error && (
						<p className="text-red-600 font-medium mb-2">{error}</p>
					)}

					<button
						type="submit"
						disabled={isLoading}
						className="w-full py-2 px-4 bg-[#d62828] text-white font-semibold rounded hover:bg-red-700 transition"
					>
						{isLoading ? (
							<Loader className="w-6 h-6 animate-spin mx-auto" />
						) : (
							"Create"
						)}
					</button>
				</form>
			</div>

			<div className="border-t px-8 py-4 text-center">
				<p className="text-sm text-gray-600">
					Back to{" "}
					<span
						onClick={() => navigate("/admin-panel/items")}
						className="text-[#3a5a40] hover:underline font-medium cursor-pointer"
					>
						Item List
					</span>
				</p>
			</div>
		</div>
	);
};

export default CreateItem;
