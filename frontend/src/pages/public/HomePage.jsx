import { Link } from "react-router-dom";

const promoTexts = [
  "We serve the best burgers",
  "in the town. Try our famous",
  "burgers right now.",
];

const HomePage = () => {
  return (
    <div className="max-w-5xl w-full mx-auto mt-20 bg-white border border-[#fcbf49] rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">

        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/home/about-burger.jpg"
            alt="Hero burger"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 p-8 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2 text-[#d62828]">Welcome!</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Burger Lovers</h3>

          <div className="space-y-1 mb-6">
            {promoTexts.map((line, index) => (
              <p key={index} className="text-sm text-gray-700 font-medium">{line}</p>
            ))}
          </div>

          <Link
            to="/menu"
            className="inline-block py-2 px-4 bg-[#d62828] text-white text-lg font-semibold rounded hover:bg-red-700 transition"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
