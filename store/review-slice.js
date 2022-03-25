const { createSlice } = require("@reduxjs/toolkit");

const reviewSlice = createSlice({
  name: "review",
  initialState: {
    reviews: [],
    sort: "최신순",
    addReview: false,
  },
  reducers: {
    addReview(state, action) {
      const newReview = action.payload;
      state.reviews.unshift({
        id: newReview.id,
        date: newReview.date,
        // sortDate: newReview.sortDate,
        userId: newReview.userId,
        starRating: newReview.starRating,
        image: newReview.image,
        review: newReview.review,
        comments: ["예뻐요"],
        like: 0,
      });
      state.addReview = true;
    },
    noSendReview(state, action) {
      state.addReview = false;
    },
    replaceReview(state, action) {
      state.reviews = action.payload.reviews;
    },
    addComment(state, action) {
      const { id, currentComment } = action.payload;
      const findIndex = state.reviews.findIndex((item) => item.id === id);
      const newArr = [...state.reviews];
      newArr[findIndex].comments.push(currentComment);
      state.addReview = true;
    },
    addLike(state, action) {
      const id = action.payload;
      const findIndex = state.reviews.findIndex((item) => item.id === id);
      const newArr = [...state.reviews];
      newArr[findIndex].like += 1;
      state.addReview = true;
    },
    sortReview(state, action) {
      const type = action.payload;
      const newArr = [...state.reviews];
      switch (type) {
        case "latest":
          state.reviews = newArr.sort((a, b) => b.date - a.date);
          break;
        case "like":
          state.reviews = newArr.sort((a, b) => b.like - a.like);
          break;
        case "comment":
          state.reviews = newArr.sort(
            (a, b) => b.comments.length - a.comments.length
          );
          break;
        case "random":
          state.reviews = newArr.sort(() => Math.random() - 0.5);
          break;
        default:
          return state.reviews;
      }
    },
    changeSortType(state, action) {
      const type = action.payload;
      switch (type) {
        case "latest":
          state.sort = "최신순";
          break;
        case "like":
          state.sort = "좋아요 많은순";
          break;
        case "comment":
          state.sort = "댓글 많은순";
          break;
        case "random":
          state.sort = "무작위";
          break;
        default:
          return (state.sort = "최신순");
      }
    },
  },
});

export const reviewActions = reviewSlice.actions;
export default reviewSlice;
