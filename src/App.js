import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css"; // Import the Tailwind CSS file
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login"; // Import the Login component
import Error from "./Components/Error";

// Define the AppLayout component
const AppLayout = ({ children }) => {
  const location = useLocation();
  return (
    <div className="app">
      {location.pathname !== "/login" && <Header />}
      {children}
    </div>
  );
};

// Define the App component with routing
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout><Body /></AppLayout>} />
        <Route path="/about" element={<AppLayout><About /></AppLayout>} />
        <Route path="/contact" element={<AppLayout><Contact /></AppLayout>} />
        <Route path="/login" element={<Login />} /> {/* Directly render Login component */}
        <Route path="*" element={<AppLayout><Error /></AppLayout>} /> {/* Catch-all route for 404 errors */}
      </Routes>
    </BrowserRouter>
  );
};

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

export default App;
