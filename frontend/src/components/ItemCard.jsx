import { API_BASE_URL } from "../config/config";
const ItemCard = ({item}) => {
    return (
        <div
            key={item._id}
            className="max-w-sm h-96 bg-white border border-white dark:bg-gray-800 dark:border-gray-700 flex flex-col"
        >
            <img
                className="h-72 w-full object-cover"
                src={`${API_BASE_URL}/${item.image}`}
                alt={item.title}
                loading="lazy"
            />
            <div className="p-4 flex-grow flex flex-col items-center justify-center text-center">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-400 mt-2 font-bold">
                    Tk. {item.price}
                </p>
            </div>
        </div>
    );
};

export default ItemCard;