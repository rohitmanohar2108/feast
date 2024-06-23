import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="h-10"
        />
        <span className="ml-3 text-xl font-bold text-gray-800 cursor-pointer">MyCompany</span>
      </div>
      <nav className="nav-items">
        <ul className="flex space-x-8 text-lg text-gray-600 font-bold">
          <li className="hover:text-gray-900 transition duration-300">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-900 transition duration-300">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-900 transition duration-300">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-gray-900 transition duration-300">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="hover:text-gray-900 transition duration-300">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

