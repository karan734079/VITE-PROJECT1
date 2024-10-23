import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import calculatorReducer from "./calculatorSlice";

export const appStore = configureStore({
    reducer : {
        counter : counterReducer,
        calculator : calculatorReducer,
    },
});