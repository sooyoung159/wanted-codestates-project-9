import reviewSlice from "./review-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { review: reviewSlice.reducer },
});

export default store;
