const { createSlice } = require("@reduxjs/toolkit");

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
  },
  reducers: {
    addReview(state, action) {
      const newReview = action.payload;
      state.reviews.push({
        id: newReview.id,
        date: newReview.date,
        userId: newReview.userId,
        starRating: newReview.starRating,
        image: newReview.image,
        review: newReview.review,
        comment: newReview.comment,
        like: newReview.like,
      });
    },
    replaceReview(state, action) {
      state.reviews = action.payload.reviews;
    },
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice;
