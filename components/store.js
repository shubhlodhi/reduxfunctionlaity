import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./redux.js"

const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

export default store;