import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reviewActions } from "../../store/review-slice";
import { uiAction } from "../../store/ui-slice";
import Comment from "../comment/Comment";

const List = (props) => {
  const reviews = useSelector((state) => state.review.reviews);
  const review = useSelector((state) => state.review);
  const dispatch = useDispatch();
  const [size, setSize] = useState(9);
  const idIndex = props.index ? props.index : 0;
  const infinityRef = useRef();
  const notification = useSelector((state) => state.ui.toggle);

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
    console.log(infinityRef.current);
    if (infinityRef.current) observer.observe(infinityRef.current);
  }, []);

  const starRating = (rating) => {
    const star = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        star.push(
          <img
            key={i}
            src="https://i.balaan.io/mobile/img/icons/icon-star-black.png"
          />
        );
      } else {
        star.push(
          <img
            key={i}
            src="https://i.balaan.io/mobile/img/icons/icon-star-gray.png"
          />
        );
      }
    }
    return star;
  };

  const likeHanler = (id) => {
    dispatch(reviewActions.addLike(id));
  };

  const copyToClipboard = (text) => {
    const tmp = document.createElement("textarea");
    document.body.appendChild(tmp);
    tmp.value = text;
    tmp.select();
    document.execCommand("copy");
    document.body.removeChild(tmp);
    console.log("good");
  };

  const copyUrlHandler = (id) => {
    let currentUrl = window.location.href;
    if (currentUrl.includes("list")) {
      currentUrl.replace("list", id);
    } else {
      currentUrl = window.location + `/${id}`;
    }
    copyToClipboard(currentUrl);
    dispatch(
      uiAction.showNotification({
        status: "copy",
        message: "된다",
      })
    );
    dispatch(uiAction.toggle());
    setTimeout(() => {
      dispatch(uiAction.toggle());
    }, 1000);

    console.log(notification);
  };

  return (
    <>
      {reviews
        .filter((review, idx) => idx >= idIndex)
        .filter((review, idx) => idx < size)
        .map((review) => (
          <Wrapper key={review.id}>
            <NameCard>
              <div>{review.userId}</div>
              <div>
                <span>{review.date}</span>
                <MoreIcon src="https://i.balaan.io/mobile/img/icon/icon-more.png" />
              </div>
            </NameCard>
            <ImgContainer>
              <img src={review.image} />
            </ImgContainer>
            <DesContainer>
              <InfoContainer>
                <div>
                  <LikeIcon
                    onClick={() => likeHanler(review.id)}
                    src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png"
                  />
                  {review.like !== 0 && <Like>{review.like}</Like>}
                  <ShareIcon
                    src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2"
                    onClick={() => copyUrlHandler(review.id)}
                  />
                </div>
                <div>
                  <HeartIcon src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png" />
                </div>
              </InfoContainer>
              <StarsContainer>{starRating(review.starRating)}</StarsContainer>
              <Review>{review.review}</Review>
            </DesContainer>
            <CommentContainer>
              {review.comments &&
                review.comments.map((comment, i) => (
                  <Comments key={i}>
                    <div>sooyoung</div>
                    <div>{comment}</div>
                  </Comments>
                ))}
              <Comment id={review.id} />
            </CommentContainer>
          </Wrapper>
        ))}
      <div ref={infinityRef} />
    </>
  );
};

export default List;

const Wrapper = styled.div`
  width: 100%;
`;

const NameCard = styled.div`
  height: 2rem;
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  margin: 0 2rem;
`;

const DesContainer = styled.div`
  margin: 0 1rem;
`;

const MoreIcon = styled.img`
  max-width: 1rem;
  max-height: 1rem;
  margin-right: 1rem;
  margin-left: 1rem;
`;

const LikeIcon = styled.img`
  max-width: 2rem;
  max-height: 2rem;
  margin-right: 1rem;
`;

const Like = styled.div`
  margin-right: 1rem;
  font-size: 1.2rem;
  font-weight: 600;
  height: 100%;
`;

const ShareIcon = styled.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-right: 1rem;
`;

const HeartIcon = styled.img`
  max-width: 1.5rem;
  max-height: 1.5rem;
  margin-right: 1rem;
`;

const ImgContainer = styled.div`
  /* max-height: 40rem; */
  height: 30rem;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  margin-bottom: 1rem;
  /* width: 500px; */
  > img {
    object-fit: cover;
    width: 100%;
    height: 30rem;
  }
`;

const InfoContainer = styled.div`
  height: 3rem;
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

const StarsContainer = styled.div`
  > img {
    width: 1.2rem;
  }
`;

const Review = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
`;

const CommentContainer = styled.div`
  background-color: #f9f9f9;
  padding: 1rem 1rem;
  /* height: 5rem; */
  > div {
    margin: 1rem 0;
  }
`;

const Comments = styled.div`
  > div:first-child {
    margin-bottom: 0.5rem;
    font-weight: 800;
  }
`;
