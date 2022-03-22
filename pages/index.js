import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../components/layout/Layout";
import View from "../components/layout/View";
import Grid from "../components/view/Grid";
import { fetchReviewData, sendReviewData } from "../store/review-actions";

const Home = () => {
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);
  const reviews = useSelector((state) => state.review.reviews);
  // console.log(reviews);

  useEffect(() => {
    dispatch(fetchReviewData());
    console.log(reviews);
  }, [dispatch]);

  // useEffect(() => {
  //   if (isInitial) {
  //     isInitial = false;
  //     return;
  //   }

  //   dispatch(sendReviewData(review));
  // }, [review]);

  return (
    <Wrapper>
      <Layout />
      <View />
      <Grid />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 565px;
  border: solid 1px black;
  height: 100%;
  margin: 10px;
`;
