import { useCalculator } from "../Contexts";

const Buttons = () => {
  const { result, squareRoot, square, clear, handle } = useCalculator();
  const numbers = ["1", "2", "3", "+", "-", "4", "5", "6", "*", "/", "7", "8", "9", `x²`, `√x`, '.', '0', 'clear', '='];

  return (
    <div className="grid grid-cols-5 gap-2 mb-2">
      {numbers.map((number) => (
        <button
          key={number}
          onClick={(number === '=') ? result : (number === `√x`) ? squareRoot : (number === `x²`) ? square : (number === 'clear') ? clear : () => handle(number)}
          className={`text-white py-3 rounded-md transition duration-200 ${number === '=' ? "bg-green-500 w-[105px]" : "bg-blue-500"} ${number === 'clear' ? "bg-red-500" : ""}`}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
