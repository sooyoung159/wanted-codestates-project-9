import { reviewActions } from "./review-slice";

export const sendReviewData = (review) => {
  return async (dispatch) => {
    const sendrequest = async () => {
      const response = await fetch(
        "https://react-http-6a6f2-default-rtdb.firebaseio.com/review.json",
        {
          method: "PUT",
          body: JSON.stringify({
            reviews: review.reviews,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Sending review data failed");
      }
    };
    try {
      await sendrequest();
    } catch (err) {
      console.log(err);
    }
  };
};

export const fetchReviewData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-6a6f2-default-rtdb.firebaseio.com/review.json",
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Could not fetch review data");
      }
      const data = await response.json();
      return data;
    };
    try {
      const reviewData = await fetchData();
      dispatch(
        reviewActions.replaceReview({
          reviews: reviewData.reviews,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
