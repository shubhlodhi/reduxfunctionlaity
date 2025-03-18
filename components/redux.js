import { createSlice } from "@reduxjs/toolkit";
const loadUsersFromLocalStorage = () => {
    try {
        const storedUsers = localStorage.getItem("users");
        return storedUsers ? JSON.parse(storedUsers) : [];
    } catch (error) {
        console.error("Error loading users from localStorage", error);
        return [];
    }
};
const initialState = {
    users: loadUsersFromLocalStorage()
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addUser: (state, action) => {
          
            state.users.push({
                id: action.payload.id || Math.floor(Math.random() * 1000),
                name: action.payload.name || "Unknown",
                counter: action.payload.counter || 0,
            });
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        updateName: (state, action) => {
            const user = state.users.find(user => user.id === action.payload.id);
            if (user) {
                user.name = action.payload.name;
            }
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        increment: (state, action) => {
            const user = state.users.find(user => user.id === action.payload);
            if (user) {
                user.counter += 1;
            }
            localStorage.setItem("users", JSON.stringify(state.users));
        },
        decrement: (state, action) => {
            const user = state.users.find(user => user.id === action.payload);
            if (user && user.counter > 0) {
                user.counter -= 1;
            }
            localStorage.setItem("users", JSON.stringify(state.users));
        },
       
    },
});

export const { addUser, updateName, increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
