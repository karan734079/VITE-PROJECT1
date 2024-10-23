import Input from "../components/InputCalculator";
import Buttons from "../components/Buttons";
import { useEffect, useState } from "react";
import { CalculatorProvider } from "../Contexts";
import History from "../components/History";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  const result = () => {
    try {
      const output = eval(input);
      const newOutput = output % 1 === 0 ? output : output.toFixed(2);
      setHistory([...history, { input, output: newOutput }]);
      setInput(newOutput);
    } catch {
      setInput("Error");
    }
  };

  const square = () => {
    const squareValue = parseFloat(input);
    const output = squareValue * squareValue;
    const newOutput = output % 1 === 0 ? output : output.toFixed(2);
    setHistory([...history, { input: `(${input})²`, output: newOutput }]);
    setInput(newOutput);
  };

  const squareRoot = () => {
    const squareRootValue = parseFloat(input);
    const output = Math.sqrt(squareRootValue);
    const newOutput = output % 1 === 0 ? output : output.toFixed(2);
    setHistory([...history, { input: `√(${input})`, output: newOutput }]);
    setInput(newOutput);
  };

  const clearHistory = () => {
    localStorage.removeItem('history');
    setHistory([]);
  }

  const clear = () => {
    setInput("");
  };

  const handle = (number) => {
    const lastChar = input[input.length - 1];
    const operators = ["+", "-", "*", "/", "."];

    if (operators.includes(lastChar) && operators.includes(number)) {
      return;
    }

    setInput(input + number);
  };

  useEffect(()=>{
    const history = JSON.parse(localStorage.getItem("history"));
    setHistory(history);
  },[]);

  useEffect(()=>{
    localStorage.setItem("history",JSON.stringify(history));
  },[history]);

  return (
    <CalculatorProvider value={{ input, handle, clear, result, square, squareRoot, history, clearHistory }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-teal-500 to-blue-500">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full">
          <Input />
          <Buttons />
          <History />
        </div>
      </div>
    </CalculatorProvider>
  );
};

export default Calculator;
