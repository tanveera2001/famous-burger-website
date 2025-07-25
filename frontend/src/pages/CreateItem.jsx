// import { useState } from "react";
// import axios from "axios";
// import { API_BASE_URL } from "../config/config";

// const CreateItem = () => {
//     const [title, setTitle] = useState("");
//     const [price, setPrice] = useState("");
//     const [image, setImage] = useState(null);
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);

//     const checkDuplicateTitle = async (title) => {
//         try {
//             const res = await axios.get(`${API_BASE_URL}/api/items/check-title?title=${encodeURIComponent(title.trim())}`);
//             return res.data.exists;
//         } catch (err) {
//             console.error("Error checking duplicate title:", err);
//             return false;
//         }
//     };

//     const validateForm = async () => {
//         const newErrors = {};

//         // Title validation
//         if (!title.trim()) {
//             newErrors.title = "Title is required.";
//         } else if (title.trim().length < 3) {
//             newErrors.title = "Title must be at least 3 characters.";
//         } else {
//             const titleExists = await checkDuplicateTitle(title.trim().toLowerCase());
//             if (titleExists) {
//                 newErrors.title = "An item with this title already exists.";
//             }
//         }

//         // Price validation
//         if (!price) {
//             newErrors.price = "Price is required.";
//         } else if (isNaN(price) || Number(price) <= 0) {
//             newErrors.price = "Price must be a number greater than 0.";
//         }

//         // Image validation
//         if (!image) {
//             newErrors.image = "Image is required.";
//         } else {
//             const allowedMimeTypes = ["image/jpeg", "image/png", "image/jpg"];
//             const allowedExtensions = [".jpeg", ".jpg", ".png"];
//             const fileType = image.type;
//             const fileName = image.name.toLowerCase();
//             const fileExt = fileName.substring(fileName.lastIndexOf("."));

//             if (
//                 !allowedMimeTypes.includes(fileType) ||
//                 !allowedExtensions.includes(fileExt)
//             ) {
//                 newErrors.image = "Only JPG, JPEG, or PNG images are allowed.";
//             }
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };


//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!(await validateForm())) return;

//         const formData = new FormData();
//         formData.append("title", title);
//         formData.append("price", price);
//         formData.append("image", image);

//         try {
//             setLoading(true);
//             const res = await axios.post(`${API_BASE_URL}/api/items/create`, formData, {
//                 headers: { "Content-Type": "multipart/form-data" },
//             });

//             alert("Item Created Successfully!");
//             console.log(res.data);

//             // Clear form
//             setTitle("");
//             setPrice("");
//             setImage(null);
//             setErrors({});
//             e.target.reset();
//         } catch (err) {
//             console.error("Error creating item:", err);
//             if (err.response && err.response.status === 409) {
//                 setErrors({ title: err.response.data.message });
//             } else {
//                 alert("Something went wrong. Please try again.");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
//         >
//             <div className='p-8'>
//                 <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
//                     Welcome Back
//                 </h2>
//                 <form onSubmit={handleSubmit} className="flex flex-col gap-4">

//                     {/* Title */}
//                     <div>
//                         <label htmlFor="title" className="block mb-1 font-medium text-gray-700">Burger Name</label>
//                         <input id="title" type="text" placeholder="e.g. Cheese Burger" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
//                         {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
//                     </div>

//                     {/* Price */}
//                     <div>
//                         <label htmlFor="price" className="block mb-1 font-medium text-gray-700">Burger Price</label>
//                         <input id="price" type="number" placeholder="e.g. 300" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black" />
//                         {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
//                     </div>

//                     {/* Image */}
//                     <div>
//                         <label htmlFor="image" className="block mb-1 font-medium text-gray-700">Upload Image</label>
//                         <label htmlFor="image" className="inline-block cursor-pointer border border-gray-300 rounded px-4 py-2 text-gray-700 hover:bg-gray-100 transition">{image ? image.name : "Choose an image"}</label>
//                         <input id="image" type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} className="hidden" />{errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
//                     </div>

//                     {/* Submit */}
//                     <button type="submit" disabled={loading} className="bg-black text-white py-2 text-base rounded hover:bg-gray-900 transition mt-4 disabled:opacity-50 disabled:cursor-not-allowed">{loading ? "Creating..." : "Create Item"}</button>
//                 </form>
//             </div>
//         </motion.div>
//     );
// };

// export default CreateItem;
