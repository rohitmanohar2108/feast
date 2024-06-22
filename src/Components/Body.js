import React, { useEffect, useState } from "react";
import { FiFilter } from 'react-icons/fi'; // Ensure this import is correct
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import Modal from "./Modal";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [topRatedFilter, setTopRatedFilter] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.134483104929934&lng=79.06918756663799&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      console.log(json);

      let restaurants = extractRestaurants(json.data.cards);
      console.log("restaurants:", restaurants); // Log to inspect structure

      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const extractRestaurants = (cards) => {
    for (const card of cards) {
      if (card.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        return card.card.card.gridElements.infoWithStyle.restaurants;
      } else if (card.card?.card?.gridElements?.info) {
        return card.card.card.gridElements.info;
      }
    }
    return [];
  };

  const filteredRestaurants = listOfRestaurants
    .filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((restaurant) => !topRatedFilter || restaurant.info.avgRating > 4.0);

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex items-center mb-4 space-x-4">
        <input
          type="text"
          className="p-2 border rounded flex-grow"
          placeholder="Search for restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())} // Set the search term to lowercase
        />
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <FiFilter size={24} />
        </button>
      </div>
      <div className="container mx-auto px-4">
        <div className="text-2xl font-bold mb-4">Best Place To Eat Across City</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <RestaurantCard
                key={restaurant.info.id} // Assuming restaurant has a unique ID
                resName={restaurant.info.name}
                cuisine={restaurant.info.cuisines.join(", ")}
                imageId={restaurant.info.cloudinaryImageId}
                avgRating={restaurant.info.avgRating}
                deliveryTime={restaurant.info.sla.deliveryTime}
              />
            ))
          ) : (
            <p>No restaurants found</p>
          )}
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApplyTopRated={() => {
          setTopRatedFilter(true);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default Body;
