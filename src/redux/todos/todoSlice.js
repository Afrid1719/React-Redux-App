import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: [],
    error: "",
    loading: false
}

export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    return response.json()
});

const todosReducer = createSlice({
    name: 'todos',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.loading = false
            state.error = ""
            state.todos = action.payload
        })
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.todos = []
        })
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        }
    }
})

export const {addTodo} = todosReducer.actions
export default todosReducer.reducer 