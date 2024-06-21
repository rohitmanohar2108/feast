import { LOGO_URL } from "../utils/constants";

const Header = () => {
    return (
      <header className="flex items-center justify-between p-4 border-b border-gray-300 bg-white shadow-md">
        <div className="flex items-center">
          <img
            src={LOGO_URL}
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

  export default Header;