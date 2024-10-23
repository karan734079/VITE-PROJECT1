import { useSelector , useDispatch } from "react-redux";
import { increment , decrement } from "../store/counterSlice";

const CounterRedux = () => {
    const counter = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r pb-20 from-teal-500 to-blue-500">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4 text-gray-800 text-center">Counter</h1>
                <div className="flex items-center">
                    <button
                        onClick={()=>dispatch(decrement())}
                        className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 transition duration-200 mr-4"
                    >
                        Decrement
                    </button>
                    <p className="text-3xl font-semibold text-gray-700">{counter}</p>
                    <button
                        onClick={()=>dispatch(increment())}
                        className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-200 ml-4"
                    >
                        Increment
                    </button>
                </div>
            </div>
        </div>
  )
}

export default CounterRedux;
