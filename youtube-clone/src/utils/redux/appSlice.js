import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        toggleSideBar: false,
    },
    reducers: {
        toggleSideBar: (state, action) => {
            state.toggleSideBar = !state.toggleSideBar;
        },
        closeSideBar: (state) => {
            state.toggleSideBar = false;
        },
    },
});

export const { toggleSideBar, closeSideBar } = appSlice.actions;
export default appSlice.reducer;
