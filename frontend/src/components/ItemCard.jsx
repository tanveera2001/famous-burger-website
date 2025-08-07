import { API_BASE_URL } from "../config/config";

const ItemCard = ({ item }) => {
  return (
    <div
      key={item._id}
      className="max-w-sm h-96 bg-white border border-[#fcbf49] rounded-lg shadow-md flex flex-col transition-transform hover:scale-105 duration-200"
    >
      <img
        className="h-72 w-full object-cover rounded-t-lg"
        src={`${API_BASE_URL}/${item.image}`}
        alt={item.title}
        loading="lazy"
      />

      {/* Divider line */}
      <div className="h-[1px] bg-gray-200 w-full" />


      <div className="p-4 flex-grow flex flex-col items-center justify-center text-center">
        <h5 className="text-lg font-bold text-[#d62828]">{item.title}</h5>
        <p className="text-sm text-[#3a5a40] mt-2 font-medium">
          Tk. {item.price}
        </p>
      </div>
    </div>
  );
};

export default ItemCard;
