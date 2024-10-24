import { useDispatch } from "react-redux";
import { result, squareRoot, square, clear, handle } from "../store/calculatorSlice";


const CalculatorReduxButtons = () => {
  const dispatch = useDispatch();

  const numbers = ["1", "2", "3", "+", "-", "4", "5", "6", "*", "/", "7", "8", "9", `x²`, `√x`, '.', '0', 'C', '='];

  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {numbers.map((number) => (
        <button
          key={number}
          onClick={(number === '=') ? () => dispatch(result()) : (number === `√x`) ? () => dispatch(squareRoot()) : (number === `x²`) ? () => dispatch(square()) : (number === 'C') ? () => dispatch(clear()) : () => dispatch(handle(number))}
          className={`text-white py-3 rounded-md transition duration-200 ${number === '=' ? "bg-green-500 w-[105px]" : "bg-blue-500"} ${number === 'C' ? "bg-red-500" : ""}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default CalculatorReduxButtons;

