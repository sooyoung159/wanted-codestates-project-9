import { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { reviewActions } from "../../store/review-slice";

const CommentForm = (props) => {
  const dispatch = useDispatch();
  const commentRef = useRef();

  const commentHandler = (event) => {
    event.preventDefault();
    const id = props.id;
    const currentComment = commentRef.current.value;
    if (currentComment) {
      dispatch(reviewActions.addComment({ id, currentComment }));
      commentRef.current.value = "";
    }
  };

  const keyInputHanler = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const id = props.id;
      const currentComment = commentRef.current.value;
      if (currentComment) {
        dispatch(reviewActions.addComment({ id, currentComment }));
        commentRef.current.value = "";
      }
    }
  };

  return (
    <FormContainer>
      <div>
        <input
          type="text"
          placeholder="댓글 달기"
          ref={commentRef}
          onKeyPress={keyInputHanler}
        />
        <button onClick={commentHandler}>게시</button>
      </div>
    </FormContainer>
  );
};

export default CommentForm;

const FormContainer = styled.div`
  margin: 1.2rem 1rem;
  > div {
    background-color: white;
    border-radius: 4rem;
    height: 3rem;

    > input {
      border: none;
      margin-left: 2rem;
      :focus {
        outline: none;
      }
      height: 2.5rem;
      font-size: 1rem;
      width: 23rem;
      padding-top: 0.2rem;
    }
    > button {
      font-size: 1rem;
      padding-top: 0.2rem;
    }
  }
`;
