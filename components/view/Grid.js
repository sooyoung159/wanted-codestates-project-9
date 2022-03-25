import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Grid = () => {
  const reviews = useSelector((state) => state.review.reviews);
  const router = useRouter();
  const infinityRef = useRef();
  const [size, setSize] = useState(9);

  const scrollObserver = useCallback((entries) => {
    const target = entries[0];
    if (target.isIntersecting) {
      let newSize = size + 9;
      setSize(newSize);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };
    const observer = new IntersectionObserver(scrollObserver, option);
    if (infinityRef.current) observer.observe(infinityRef.current);
  }, []);

  const showListDetail = (id) => {
    router.push("/" + id);
  };

  return (
    <Wrapper>
      {reviews
        .filter((review, idx) => idx < size)
        .map((review) => {
          return (
            <GridItem
              key={review.id}
              onClick={() => showListDetail(review.id)}
              id={review.id}
            >
              <img src={review.image} />
            </GridItem>
          );
        })}
      <div ref={infinityRef}></div>
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  display: grid;
  /* height: 100%; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
`;

const GridItem = styled.div`
  margin: 1px;
  > img {
    width: 100%;
    height: 100%;
  }
`;
