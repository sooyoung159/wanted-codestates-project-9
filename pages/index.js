import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import View from "../components/layout/View";
import Loader from "../components/ui/Loader";
import Grid from "../components/view/Grid";
import { fetchReviewData, sendReviewData } from "../store/review-actions";
import { reviewActions } from "../store/review-slice";

let isInitial = true;

const Home = () => {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);
  const reviews = useSelector((state) => state.review.reviews);
  const add = useSelector((state) => state.review.addReview);
  // console.log(reviews);

  useEffect(() => {
    if (isInitial) {
      dispatch(fetchReviewData());
      isInitial = false;
      return;
    }
  }, [reviews]);

  useEffect(() => {
    if (add) {
      dispatch(sendReviewData(review));
      dispatch(reviewActions.noSendReview());
    }
  }, [add]);

  return (
    <Background>
      <>
        <Wrapper>
          <Layout />
          <View />
          <Grid />
        </Wrapper>
      </>
    </Background>
  );
};

export default Home;

const Background = styled.div`
  display: flex;
  background-color: lightgray;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  justify-content: center;
  background-color: white;
  width: 565px;
  border: solid 1px white;
  height: auto;
  /* margin: 1rem; */
`;
