import { useDispatch, useSelector } from "react-redux";
import { clearHistory } from '../store/calculatorSlice';

const CalculatorReduxHistory = () => {
  const history = useSelector((state) => state.calculator.history);
  const dispatch = useDispatch();

  return (
    <div className="mt-4 p-4 border rounded-md shadow-md bg-gray-100">
      <h2 className="text-lg font-semibold">History</h2>
      <ul className="list-disc pl-5 mt-2">
        {history.length > 0 ? (
          history.map((item, index) => (
            <li key={index} className="text-sm">
              {item.expression} = {item.result} 
            </li>
          ))
        ) : (
          <li className="text-sm text-gray-500">No history available</li>
        )}
      </ul>
      {history.length > 0 && (
        <button
          onClick={() => dispatch(clearHistory())}
          className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md transition duration-200 hover:bg-red-600 focus:outline-none"
        >
          Clear History
        </button>
      )}
    </div>
  );
};

export default CalculatorReduxHistory;
