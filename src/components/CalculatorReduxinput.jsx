import { useSelector } from "react-redux"; 

const CalculatorReduxinput = () => {
  const input = useSelector((state) => state.calculator.input);
  
  return (
    <input
      type="text"
      value={input}
      readOnly
      className="w-full text-right text-2xl p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-1 focus:ring-black"
    />
  );
};

export default CalculatorReduxinput;
