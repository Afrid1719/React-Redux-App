import logger from 'redux-logger'
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice"
import inputSliceReducer from "./input/inputSlice"
import todosReducer from "./todos/todoSlice"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        input: inputSliceReducer,
        todos: todosReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
