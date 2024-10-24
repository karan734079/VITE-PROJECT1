import { useCalculator } from "../Contexts";

const History = () => {
  const { history, clearHistory } = useCalculator();

  return (
    <div className="mt-4 p-4 border rounded-md shadow-md bg-gray-100 max-h-40 overflow-y-auto scrollbar-hidden">
      <div className="flex justify-between">
      <h2 className="text-lg font-semibold mt-1">History</h2>
      {history.length > 0 && (
        <button
          onClick={clearHistory}
          className="mt-1 bg-red-500 text-white py-1 px-3 rounded-md transition duration-200 hover:bg-red-600 focus:outline-none"
        >
          Clear
        </button>
      )}
      </div>
      <ul className="list-disc pl-5 mt-2">
        {history.length > 0 ? (
          history.map((item, index) => (
            <li key={index} className="text-sm">
              {item.input} = {item.output}
            </li>
          ))
        ) : (
          <li className="text-sm text-gray-500">No history available</li>
        )}
      </ul>
    </div>
  );
};

export default History;
