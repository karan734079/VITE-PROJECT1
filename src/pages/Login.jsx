import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useForm } from 'react-hook-form';
import authservice from '../appWrite/auth';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    setError("");
    try {
      const session = await authservice.login(data);
      if (session) {
        const userData = await authservice.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="flex w-1/2 bg-gradient-to-r from-teal-500 to-blue-500 justify-around items-center invisible lg:visible">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Welcome Back!</h1>
          <p className="text-white mt-1">Sign in to access your dashboard</p>
        </div>
      </div>
      <div className="flex w-full h-screen lg:w-1/2 justify-center items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Welcome Back!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Log in to your account
          </p>
          {error && <p className="text-red-500 mb-4">{error}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none w-full rounded-lg"
              type="email"
              placeholder="Email Address"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          {error.email && <p className="text-red-500">{error.email.message}</p>}

          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
          </div>
          {error.password && <p className="text-red-500">{error.password.message}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 text-white py-2 rounded-2xl mt-4 hover:bg-gradient-to-r hover:from-teal-700 hover:to-blue-700"
          >
            Login
          </button>
          <p className="text-sm mt-4 text-center">
            Don&apos;t have an account? <Link to="/register" className="text-blue-500">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
