import { Link } from "react-router-dom";
const promoTexts = [
    "We serve the best burgers",
    "in the town. Try our famous",
    "burgers right now."
];
const HomePage = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                {/* Content Section */}
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-center sm:ml-auto">
                        <h2 className="text-4xl sm:text-5xl"> 
                            <span className="font-bold">Hello</span>
                            <span className="hidden sm:block font-bold sm:text-5xl">Burger Lovers</span><br />
                            {promoTexts.map((line, index) => (<span key={index} className="hidden font-medium sm:block sm:text-2xl">{line}</span>))}
                        </h2>
                        <Link to="/items" className="inline-flex text-white items-center px-6 py-3 font-bold bg-orange-700 rounded-lg hover:opacity-75">View Menu</Link>
                    </div>
                </div>

                {/* Image Section */}
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="w-120" src="/images/home/home-hero-burger.webp" alt="Hero burger" loading="lazy"/>
                </div>
            </aside>

        </div>
    );
};

export default HomePage;