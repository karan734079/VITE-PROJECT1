import { createSlice } from "@reduxjs/toolkit";

export const weatherSlice = createSlice({
    name : "weather",
    initialState :  {
        history : [{}],
    },
    reducers : {
        addWeather : (state,action)=>{
            const recent = {
                city : action.payload.city,
                temperature : action.payload.temperature,
                humid : action.payload.humid,
                windSpeed : action.payload.windSpeed,
            }
            state.history.push(recent)
        },
        clearHistory : (state) =>{
            state.history = [];
        }
    }
})

export const {addWeather , clearHistory} = weatherSlice.actions

export default weatherSlice.reducer