import { useSelector } from "react-redux";
import styled from "styled-components";

const Grid = () => {
  const reviews = useSelector((state) => state.review.reviews);
  console.log(reviews);
  return (
    <Wrapper>
      {reviews.map((review) => {
        return (
          <GridItem key={review.id}>
            <img src={review.image} />
          </GridItem>
        );
      })}
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
`;

const GridItem = styled.div`
  background-color: gray;
  margin: 1px;
  > img {
    width: 100%;
    height: 100%;
  }
`;
