import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the Tailwind CSS file

// Define the Header component
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-GSmVcg-WEzO7Cfr6U7tcxBBthzLV6f6cGA&s"
          alt="Logo"
          className="h-10"
        />
        <span className="ml-3 text-xl font-bold text-gray-800">MyCompany</span>
      </div>
      <nav className="nav-items">
        <ul className="flex space-x-8 text-lg text-gray-600 font-bold">
          <li className="hover:text-gray-900 transition duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-gray-900 transition duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-gray-900 transition duration-300 cursor-pointer">
            Contact
          </li>
          <li className="hover:text-gray-900 transition duration-300 cursor-pointer">
            Cart
          </li>
        </ul>
      </nav>
    </header>
  );
};

// Define the RestaurantCard component

const RestaurantCard = (props) => {
const {resName, cuisine} = props;
  return (
    <div className="w-48 h-80 p-4 shadow-lg bg-gray-200 flex flex-col justify-between border border-transparent hover:border-black transition duration-300 cursor-pointer">
      <div className="mb-2 relative">
        <img
          src="https://recipe30.com/wp-content/uploads/2023/03/chicken-Biryani-848x477.jpg"
          alt="Biryani"
          className="w-full h-40 object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">{resName}</h3>
        <h4 className="text-sm">{cuisine}</h4>
        <h4 className="text-sm">4.4 stars</h4>
        <h4 className="text-sm">38 minutes</h4>
      </div>
    </div>
  );
};




// Define the Body component
const Body = () => {
  return (
    <div className="p-4">
      <div className="search mb-4">
        <input
          type="text"
          className="p-2 border rounded w-full"
          placeholder="Search for restaurants..."
        />
      </div>
      <div className="restaurant-container flex flex-wrap gap-3">
        <RestaurantCard
          resName="Meghna food"
          cuisine="Biryani, North India, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Burger, Fast food, Cold-drinks" />
      </div>
    </div>
  );
};

// Define the AppLayout component
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// Render the AppLayout component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

export default AppLayout;
