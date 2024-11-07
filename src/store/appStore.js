import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import calculatorReducer from "./calculatorSlice";
import todoReducer from "./todoSlice";
import weatherReducer from "./weatherSlice";
import authReducer from "./authSlice";

export const appStore = configureStore({
    reducer : {
        counter : counterReducer,
        calculator : calculatorReducer,
        todo : todoReducer,
        weather : weatherReducer, 
        auth : authReducer,
    }, 
}); 