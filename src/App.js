import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Import the Tailwind CSS file
import Header from "./Components/Header";
import Body from "./Components/Body";


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