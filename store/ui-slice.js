import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showNotification: false,
    notification: null,
    loading: false,
    hover: false,
  },
  reducers: {
    toggle(state) {
      state.showNotification = !state.showNotification;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        message: action.payload.message,
      };
    },
    showLoading(state) {
      state.loading = !state.loading;
    },
    hoverHandler(state) {
      state.hover = !state.hover;
    },
  },
});

export const uiAction = uiSlice.actions;

export default uiSlice;
