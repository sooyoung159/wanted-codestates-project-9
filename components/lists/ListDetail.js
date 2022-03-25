import styled from "styled-components";

const ListDetail = (props) => {
  console.log(props.index);
  return (
    <Wrapper key={props.id}>
      <NameCard>
        <div>{props.userId}</div>
        <div>
          <span>{props.date}</span>
          <MoreIcon src="https://i.balaan.io/mobile/img/icon/icon-more.png" />
        </div>
      </NameCard>
      <ImgContainer>
        <img src={props.image} />
      </ImgContainer>
      <DesContainer>
        <InfoContainer>
          <div>
            <LikeIcon
              onClick={() => likeHanler(props.id)}
              src="https://static.balaan.co.kr/mobile/img/icon/like_hand.png"
            />
            {props.like !== 0 && <span>{props.like}</span>}
            <ShareIcon src="https://static.balaan.co.kr/mobile/img/view/share.png?v=2" />
          </div>
          <div>
            <HeartIcon src="https://static.balaan.co.kr/mobile/img/icon/ic-new-heart-normal.png" />
          </div>
        </InfoContainer>
        {/* <StartContainer>{starRating(props.starRating)}</StartContainer> */}
        <div>{props.review}</div>
      </DesContainer>
      <ReviewContainer>
        {props.comments &&
          props.comments.map((comment) => (
            <div>
              <div>sooyoung</div>
              <div>{comment}</div>
            </div>
          ))}
        <Comment id={props.id} />
      </ReviewContainer>
    </Wrapper>
  );
};

export default ListDetail;

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

const LikeIcon = styled.img`
  max-width: 1rem;
  max-height: 1rem;
  margin-right: 1rem;
`;

const ShareIcon = styled.img`
  max-width: 1rem;
  max-height: 1rem;
  margin-right: 1rem;
`;

const HeartIcon = styled.img`
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
  /* width: 500px; */
  > img {
    object-fit: cover;
    width: 100%;
    height: 30rem;
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
