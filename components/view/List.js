import { useSelector } from "react-redux";
import styled from "styled-components";

const List = () => {
  const reviews = useSelector((state) => state.review.reviews);

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

  return (
    <>
      {reviews.map((review) => (
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
                <MoreIcon src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png" />
                <span>1</span>
                <MoreIcon src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2" />
              </div>
              <div>
                <MoreIcon src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png" />
              </div>
            </InfoContainer>
            <StartContainer>{starRating(review.starRating)}</StartContainer>
            <div>{review.review}</div>
          </DesContainer>
          <ReviewContainer>
            {review.comment &&
              review.comment.map((comment) => (
                <div>
                  <div>sooyoung</div>
                  <div>{comment}</div>
                </div>
              ))}

            <FormContainer>
              <div>
                <input type="text" placeholder="댓글 달기" />
                <button>게시</button>
              </div>
            </FormContainer>
          </ReviewContainer>
        </Wrapper>
      ))}
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
`;

const ImgContainer = styled.div`
  /* max-height: 40rem; */
  height: 30rem;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  > img {
    max-height: 30rem;
  }
`;

const InfoContainer = styled.div`
  height: 2rem;
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
`;

const StartContainer = styled.div`
  > img {
    width: 1.2rem;
  }
`;

const ReviewContainer = styled.div`
  background-color: lightgray;
  padding: 1rem 1rem;
  > div {
    margin: 1rem 0;
  }
`;

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
      font-size: 3.13vmin;
      width: 23rem;
      padding-top: 0.2rem;
    }
    > button {
      /* background-color: white; */
      font-size: 3.13vmin;
      padding-top: 0.2rem;
    }
  }
`;
