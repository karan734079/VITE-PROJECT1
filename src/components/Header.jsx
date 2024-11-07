import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store/authSlice';
import authservice from '../appWrite/auth';

const Header = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authservice.logOut();
      dispatch(logout());
      localStorage.removeItem('authToken'); 
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <header className="bg-white text-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center text-center">
        <h1 className="text-2xl font-bold">MYPORTFOLIO</h1>
        <nav className="flex space-x-8">
          <Link to="/" className="hover:text-gray-600 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-600 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-600 transition">Contact Us</Link>
        </nav>

        <div className="flex space-x-4">
          {!status ? (
            <>
              <Link to="/register" className="bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-500 transition">
                Sign Up
              </Link>
              <Link to="/login" className="bg-gray-800 text-white py-2 px-4 rounded shadow hover:bg-gray-700 transition">
                Login
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="bg-gray-800 text-white py-2 px-4 rounded shadow transition"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
