import styled from "styled-components";

const List = () => {
  return (
    <Wrapper>
      <NameCard>
        <div>이름</div>
        <div>
          <span>날짜</span>
          <MoreIcon src="https://i.balaan.io/mobile/img/icon/icon-more.png" />
        </div>
      </NameCard>
      <ImgContainer>이미지</ImgContainer>
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
        <StartContainer>
          <img src="https://i.balaan.io/mobile/img/icons/icon-star-black.png" />
          <img src="https://i.balaan.io/mobile/img/icons/icon-star-black.png" />
          <img src="https://i.balaan.io/mobile/img/icons/icon-star-black.png" />
          <img src="https://i.balaan.io/mobile/img/icons/icon-star-black.png" />
          <img src="https://i.balaan.io/mobile/img/icons/icon-star-gray.png" />
        </StartContainer>
        <div>내용</div>
      </DesContainer>
      <ReviewContainer>
        <div>
          <div>아이디</div>
          <div>
            금주의 베스트 리뷰로 선정되어 상품권 10,000원이 발급 되었습니다!
          </div>
        </div>

        <FormContainer>
          <div>
            <input type="text" placeholder="댓글 달기" />
            <button>게시</button>
          </div>
        </FormContainer>
      </ReviewContainer>
    </Wrapper>
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
  height: 10rem;
  display: flex;
  align-items: center;
  background-color: aliceblue;
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
