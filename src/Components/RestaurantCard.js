import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resName, cuisine, imageId, avgRating } = props;

  return (
    <div className="restaurant-card p-4 cursor-pointer">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 hover:shadow-xl">
        <div className="relative">
          <img
            src={`${CDN_URL}/${imageId}`}
            alt={resName}
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm flex justify-between items-center ">
            <span className="font-bold">{resName}</span>
            <span>{avgRating} stars</span>
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-sm text-gray-700">{cuisine}</h4>
          <div className="flex justify-between items-center text-gray-500 text-xs mt-2">
            <span>38 minutes</span>
            <span>$$$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;