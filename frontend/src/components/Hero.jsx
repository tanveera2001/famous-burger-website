
import { Link } from "react-router-dom";
import Button from "./Button";

const Hero = () => {
    return (
        <section className="max-w-[1024px] px-5 h-auto mx-auto flex items-center">
            <div className="flex-1">
                <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                    Welcome<span className="text-orange-500">,</span>
                </h2>
                <h3 className="text-6xl md:text-6xl font-extrabold mt-2">
                    Burger <span className="text-orange-500">Lover!</span>
                </h3>
                <p className="text-zinc-600 text-lg md:text-xl max-w-[530px] mt-6 mb-10 leading-relaxed">
                    We serve the juiciest, most delicious burgers in town.
                    Bite into happiness & taste the difference today.
                </p>
                <Link to="/menu">
                    <Button content="Menu" />
                </Link>
            </div>

            <div className="flex-1">
                <img
                    src="/images/home/hero-section-burger.png"
                    alt="Hero Image"
                    className="w-full max-h-[500px] object-contain md:object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
