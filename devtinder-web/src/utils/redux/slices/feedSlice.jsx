import {createSlice} from "@reduxjs/toolkit";

const feedSlice = createSlice(
    {
        name: "feed",
        initialState: null,
        reducers: {
            addFeed: (state, action) => {
                return action.payload
            },
            removeFeed: (state, action) => {
                return null
            },

            removeUserFromFeed: (state, action) => {
                state.data = state.data.filter((user) => {
                    return user._id !== action.payload
                })
                return state
            }
        }
    }
);

export const { addFeed, removeUserFromFeed, removeFeed } = feedSlice.actions;
export default feedSlice.reducer;
