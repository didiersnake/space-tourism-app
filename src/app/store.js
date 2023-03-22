import { configureStore } from "@reduxjs/toolkit";
import destSlice from "../components/destSlice";

export const store = configureStore({
    reducer: {
        data: destSlice,
    }
})