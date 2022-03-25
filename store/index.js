import reviewSlice from "./review-slice";
import uiSlice from "./ui-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { review: reviewSlice.reducer, ui: uiSlice.reducer },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
