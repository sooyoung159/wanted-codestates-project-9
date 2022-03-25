import { createSlice } from "@reduxjs/toolkit";

const containerSlice = createSlice({
  name: "container",
  initialState: {
    likeItem: [],
  },
  reducers: {
    addLikeItem(state, action) {
      const newItem = action.payload;
      state.likeItem.unshift(newItem);
    },
    delLikeItem(state, action) {
      const id = action.payload;
      state.likeItem.filter((item) => item.id !== id);
    },
  },
});

export const containerActions = containerSlice.actions;
export default containerSlice;
