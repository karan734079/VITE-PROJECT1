import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, todo: "todo msg", completed: false }],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
  toggleComplete: () => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;

export const CalculatorContext = createContext({
  input: "",
  history:[{}],
  handle: () => {},
  clear: () => {},
  result: () => {},
  square: () => {},
  squareRoot: () => {},
  clearHistory: () => {},
});

export const useCalculator = () => {
  return useContext(CalculatorContext);
};

export const CalculatorProvider = CalculatorContext.Provider;
