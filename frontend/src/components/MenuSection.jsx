import { useEffect, useState, useRef } from "react";
import axios from "axios";

import Card from "./Card";
import Button from "./Button";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../config/config";

const MenuSection = () => {
    const [burgers, setBurgers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const abortControllerRef = useRef(null);

    const fetchBurgers = async (signal) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/items`, { signal });
            const items = response.data?.payload?.items || [];

            const shuffledItems = [...items];
            for (let i = shuffledItems.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [shuffledItems[i], shuffledItems[j]] = [shuffledItems[j], shuffledItems[i]];
            }

            setBurgers(shuffledItems);
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log("Fetch canceled");
            } else {
                console.error("Error fetching burgers:", err);
                setError("Failed to load burgers.");
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        abortControllerRef.current = new AbortController();
        fetchBurgers(abortControllerRef.current.signal);
        return () => abortControllerRef.current?.abort();
    }, []);

    // Show only 9 random burgers
    const limitedBurgers = burgers.slice(0, 9);

    return (
        <section className="mt-16">

            <div className="text-center mb-10">
                <h2 className="text-4xl font-extrabold text-zinc-800">
                    Our Signature <span className="text-orange-500">Burgers</span>
                </h2>
                <p className="text-zinc-600 mt-3">
                    Crafted with fresh ingredients & served with love.
                </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {loading ? (
                    <p className="col-span-full text-center text-zinc-500">Loading...</p>
                ) : error ? (
                    <p className="col-span-full text-center text-red-500">{error}</p>
                ) : limitedBurgers.length === 0 ? (
                    <p className="col-span-full text-center text-zinc-500">
                        No burgers available right now.
                    </p>
                ) : (
                    limitedBurgers.map((burger) => (
                        <Card
                            key={burger._id}
                            title={burger.title}
                            price={burger.price}
                            image={burger.image}
                        />
                    ))
                )}
            </div>

            <div className="text-center mt-12">
                <Link to="/menu">
                    <Button content="View Full Menu" />
                </Link>
            </div>
        </section>
    );
};

export default MenuSection;
