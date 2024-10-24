import { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-white text-gray-800 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">MYPROJECTS</h1>

        <nav className="flex space-x-8">
          <a href="/" className="hover:text-gray-600 transition">Home</a>
          <a href="/about" className="hover:text-gray-600 transition">About</a>
          <a href="/contact" className="hover:text-gray-600 transition">Contact Us</a>

          <div className="relative" onClick={toggleDropdown}>
            <button className="hover:text-gray-600 transition">
              My Projects
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-10">
                <a href="/todolist" className="block px-4 py-2 hover:bg-gray-200 transition">ToDo List</a>
                <a href="/calculator" className="block px-4 py-2 hover:bg-gray-200 transition">Calculator</a>
                <a href="/counterRedux" className="block px-4 py-2 hover:bg-gray-200 transition">Counter In Redux</a>
                <a href="/calculatorRedux" className="block px-4 py-2 hover:bg-gray-200 transition">Calculator in Redux</a>
                <a href="/todolistRedux" className="block px-4 py-2 hover:bg-gray-200 transition">ToDo List in Redux</a>
              </div>
            )}
          </div>
        </nav>

        <div className="flex space-x-4">
          <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
            Sign Up
          </button>
          <button className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
