import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { reviewActions } from "../../store/review-slice";

const Modal = (props) => {
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const stopPropagation = (event) => {
    event.stopPropagation();
  };

  const radioHandler = (status) => {
    setStatus(status);
  };

  const sortHandler = () => {
    dispatch(reviewActions.sortReview(status));
    dispatch(reviewActions.changeSortType(status));
    props.modalHandler();
  };

  return (
    <Wrapper>
      <Backdrop onClick={props.modalHandler}>
        <Background onClick={stopPropagation}>
          <Title>정렬</Title>
          <RadioContainer>
            <RadioButton>
              <label htmlFor="latest">최신순</label>
              <input
                name="sort"
                type="radio"
                id="latest"
                defaultChecked={status === "latest"}
                onClick={() => radioHandler("latest")}
              />
            </RadioButton>
            <RadioButton>
              <label htmlFor="like">좋아요 많은 순</label>
              <input
                name="sort"
                type="radio"
                id="like"
                defaultChecked={status === "like"}
                onClick={() => radioHandler("like")}
              />
            </RadioButton>
            <RadioButton>
              <label htmlFor="comment">리뷰 많은순</label>
              <input
                name="sort"
                type="radio"
                id="comment"
                defaultChecked={status === "comment"}
                onClick={() => radioHandler("comment")}
              />
            </RadioButton>
            <RadioButton>
              <label htmlFor="random">랜덤 정렬</label>
              <input
                name="sort"
                type="radio"
                defaultChecked={status === "random"}
                onClick={() => radioHandler("random")}
              />
            </RadioButton>
          </RadioContainer>
          <ApplyButton onClick={sortHandler}>적용하기</ApplyButton>
        </Background>
      </Backdrop>
    </Wrapper>
  );
};

export default Modal;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Backdrop = styled.div`
  position: fixed;
  /* display: flex; */

  /* justify-content: center; */
  top: 0rem;
  /* left: 20%; */
  width: 567px;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

const Background = styled.div`
  background-color: gray;
  position: relative;
  margin-top: 50%;
  height: 100%;
  padding: 2rem;
  z-index: 11;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const RadioContainer = styled.div`
  width: 100%;
  height: 10rem;
`;

const RadioButton = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2.2rem;
  border-bottom: 1px solid black;
  align-items: center;
  :last-child {
    border-bottom: none;
  }

  > label {
    width: 100%;
  }
`;

const ApplyButton = styled.div`
  display: flex;
  background-color: black;
  color: white;
  width: 100%;
  height: 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;
