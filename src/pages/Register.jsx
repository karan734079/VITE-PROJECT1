import authservice from '../appWrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import {login} from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()

  const create = async (data) => {
    const userData = await authservice.createAccount(data)
    if (userData) {
      const userData = await authservice.getCurrentUser()
      if (userData) dispatch(login(userData))
      navigate('/')
    }
  }


  return (
    <div className="h-screen flex flex-col lg:flex-row">
      <div className="flex w-full h-screen lg:w-1/2 justify-center items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit(create)}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Aloha!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Register yourself
          </p>
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
              className="pl-2 outline-none border-none"
              type="type"
              name=""
              id=""
              placeholder="name"
              {...register("name", {
                required: true,
              })}
              required
            />
          </div>
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

              className="pl-2 outline-none border-none"
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) => /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                }})}
              required
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
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
              name=""
              id=""
              placeholder="Password"
              {...register("password", {
                required: true,})}
              required
            />
          </div>

          <button

            className="block w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:bg-gradient-to-r hover:from-teal-700 hover:to-blue-700 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            type="submit">
            Register
          </button>
          <span className="text-sm ml-2 cursor-pointer">
            already have an Account? <Link to={'/login'} ><span className="text-blue-500 text-base">Login</span></Link>
          </span>
        </form>
      </div>
      <div className="flex w-1/2 bg-gradient-to-r from-teal-500 to-blue-500 i justify-around items-center invisible lg:visible">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">My Projects</h1>
          <p className="text-white mt-1">I made Multiple Projects</p>
        </div>
      </div>
    </div>

  )
}

export default Register
