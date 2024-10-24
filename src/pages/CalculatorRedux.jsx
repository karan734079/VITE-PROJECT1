import CalculatorReduxButtons from "../components/CalculatorReduxButtons"
import CalculatorReduxHistory from "../components/CalculatorReduxHistory"
import CalculatorReduxinput from "../components/CalculatorReduxinput"

const calculatorRedux = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full">
        <CalculatorReduxinput />
        <CalculatorReduxButtons />
        <CalculatorReduxHistory />
      </div> 
    </div>
  );
};

export default calculatorRedux;

