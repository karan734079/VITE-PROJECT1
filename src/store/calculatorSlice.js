import { createSlice } from "@reduxjs/toolkit";

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    input: "",
    history: [],
  },
  reducers: {
    result: (state) => {
      try {
        const result = eval(state.input);
        const newOutput =result % 1 === 0 ?result : result.toFixed(2);
        state.history.push({ expression: state.input, result: newOutput });
        state.input = newOutput;
      } catch {
        state.input = "Error";
      }
    },

    squareRoot: (state) => {
      const currentValue = parseFloat(state.input);
      const result = Math.sqrt(currentValue);
      const newOutput = result % 1 === 0 ? result : result.toFixed(2);
      state.history.push({ expression: `√(${currentValue})`, result: newOutput });
      state.input = newOutput;
    },

    square: (state) => {
      const currentValue = parseFloat(state.input);
      const result = currentValue * currentValue;
      const newOutput = result % 1 === 0 ? result : result.toFixed(2);
      state.history.push({ expression: `(${currentValue})²`, result: newOutput });
      state.input = newOutput;
    },

    clear: (state) => {
      state.input = "";
    },

    handle: (state, action) => {
        const lastChar = state.input[state.input.length - 1];
        const operators = ["+", "-", "*", "/", "."];

    if (operators.includes(lastChar) && operators.includes(action.payload)) {
      return;
    }
      state.input += action.payload;
    },

    clearHistory: (state) => {
      state.history = [];
    },
  },
});

export const { result, squareRoot, square, clear, handle , clearHistory } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;
