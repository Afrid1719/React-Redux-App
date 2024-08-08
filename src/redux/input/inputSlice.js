import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "",
    masked: true
}

export const inputSlice = createSlice({
    name: 'input',
    initialState,
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        },
        setMasked: (state, action) => {
            state.masked = action.payload
        }
    }
})

export const { setValue, setMasked } = inputSlice.actions

export default inputSlice.reducer