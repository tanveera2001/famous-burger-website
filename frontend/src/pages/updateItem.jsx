import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../config/config";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [currentImageName, setCurrentImageName] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch existing item data on mount
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/items/${id}`);
        const item = res.data.payload; // assuming your API returns item inside payload
        setTitle(item.title);
        setPrice(item.price);
        // Extract just filename from image path (e.g. "images/burgers/abc.jpg" => "abc.jpg")
        if (item.image) {
          const parts = item.image.split("/");
          setCurrentImageName(parts[parts.length - 1]);
        }
      } catch (err) {
        console.error("Error fetching item:", err);
        alert("Failed to load item data.");
      }
    };

    fetchItem();
  }, [id]);

  // Check duplicate title, excluding current item
  const checkDuplicateTitle = async (title) => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/items/check-title?title=${encodeURIComponent(title.trim())}&excludeId=${id}`);
      return res.data.exists;
    } catch (err) {
      console.error("Error checking duplicate title:", err);
      return false;
    }

  };



  const validateForm = async () => {
    const newErrors = {};

    // Title validation
    if (!title.trim()) {
      newErrors.title = "Title is required.";
    } else if (title.trim().length < 3) {
      newErrors.title = "Title must be at least 3 characters.";
    } else {
      const titleExists = await checkDuplicateTitle(title.trim().toLowerCase());
      if (titleExists) {
        newErrors.title = "An item with this title already exists.";
      }
    }

    // Price validation
    if (!price) {
      newErrors.price = "Price is required.";
    } else if (isNaN(price) || Number(price) <= 0) {
      newErrors.price = "Price must be a number greater than 0.";
    }

    // Image validation (optional)
    if (image) {
      const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
      const allowedExtensions = [".jpeg", ".jpg", ".png"];
      const fileType = image.type;
      const fileName = image.name.toLowerCase();
      const fileExt = fileName.substring(fileName.lastIndexOf("."));

      if (
        !allowedMimeTypes.includes(fileType) ||
        !allowedExtensions.includes(fileExt)
      ) {
        newErrors.image = "Only JPG, JPEG, or PNG images are allowed.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!(await validateForm())) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    if (image) {
      formData.append("image", image);
    }

    try {
      setLoading(true);
      const res = await axios.patch(`${API_BASE_URL}/api/items/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Item Updated Successfully!");
      console.log(res.data);

      // Optionally redirect after update
      navigate("/admin-panel/list-item");

    } catch (err) {
      console.error("Error updating item:", err);
      if (err.response && err.response.status === 409) {
        setErrors({ title: err.response.data.message });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-6 bg-white shadow rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Update Item</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">

        {/* Title */}
        <div>
          <label htmlFor="title" className="block mb-1 font-medium text-gray-700">Burger Name</label>
          <input id="title" type="text" placeholder="e.g. Cheese Burger" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Price */}
        <div>
          <label htmlFor="price" className="block mb-1 font-medium text-gray-700">Burger Price</label>
          <input id="price" type="number" placeholder="e.g. 300" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
        </div>

        {/* Image */}
        <div>
          <label htmlFor="image" className="block mb-1 font-medium text-gray-700">Upload Image (optional)</label>
          <label htmlFor="image" className="inline-block cursor-pointer border border-gray-300 rounded px-4 py-2 text-gray-700 hover:bg-gray-100 transition">{image ? image.name : currentImageName || "Choose an image"}</label>
          <input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="hidden" />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
        </div>

        {/* Submit */}
        <button type="submit" disabled={loading} className="bg-black text-white py-2 text-base rounded hover:bg-gray-900 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed">
          {loading ? "Updating..." : "Update Item"}
        </button>
      </form>
    </div>
  );
};

export default UpdateItem;
