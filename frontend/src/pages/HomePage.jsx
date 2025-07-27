import { Link } from "react-router-dom";

const promoTexts = [
    "We serve the best burgers",
    "in the town. Try our famous",
    "burgers right now.",
];

const HomePage = () => {
    return (
        <div className="max-w-3xl w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg">
            {/* Text Section */}
            <div className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4 text-[#d62828]">Welcome!</h2>
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Burger Lovers</h3>
                <div className="space-y-1 mb-6">
                    {promoTexts.map((line, index) => (
                        <p key={index} className="text-sm text-gray-700 font-medium">{line}</p>
                    ))}
                </div>

                <Link
                    to="/items"
                    className="inline-block py-2 px-3 w-35 bg-[#d62828] text-white text-xl font-semibold rounded hover:bg-red-700 transition"
                >
                    View Menu
                </Link>
            </div>

            {/* Image Section */}
            <div className="border-t px-8 py-4 flex justify-center">
                <img
                    src="/images/home/about-burger.jpg"
                    alt="Hero burger"
                    className="w-100 h-auto"
                    loading="lazy"
                />
            </div>
        </div>
    );
};

export default HomePage;
