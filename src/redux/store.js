import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import inputSliceReducer from "./input/inputSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        input: inputSliceReducer
    },
})

store.subscribe(() => {
    console.log(store.getState())
})