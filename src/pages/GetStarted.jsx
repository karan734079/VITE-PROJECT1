import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Projects</h1>
      <p className="mb-6">Start exploring by signing up or logging in.</p>
      <div className="flex space-x-4">
        <Link to="/register" className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition">
          Sign Up
        </Link>
        <Link to="/login" className="bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition">
          Login
        </Link>
      </div> 
    </div>
  );
};

export default GetStarted;
