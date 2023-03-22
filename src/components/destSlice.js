import { createSlice } from "@reduxjs/toolkit";
import Data from "../data.json";


const initialState = {...Data}

const destSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        

    }
})

export const selectAllData = (state) => state.data

export default destSlice.reducer