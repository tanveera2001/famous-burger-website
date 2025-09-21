
import { API_BASE_URL } from "../config/config";

const Card = ({ title, price, image }) => {
  return (
    <div className="bg-zinc-100 p-4 rounded-lg shadow-md hover:shadow-lg transition flex flex-col">
      <div className="flex justify-center mb-4">
        <img
          src={`${API_BASE_URL}/${image}`}
          alt={title}
          className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 object-contain rounded-md"
        />
      </div>

      <div className="text-center flex-1 flex flex-col">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-2xl font-bold text-orange-500 mb-4">Tk. {price}</p>
      </div>
    </div>
  );
};

export default Card;
