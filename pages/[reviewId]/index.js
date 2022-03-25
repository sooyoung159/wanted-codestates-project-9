import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import ListDetail from "../../components/lists/ListDetail";
import NewListForm from "../../components/lists/NewListForm";
import Notification from "../../components/ui/Notification";
import List from "../../components/view/List";

const ReviewDetailPage = (props) => {
  const reviews = useSelector((state) => state.review.reviews);
  const router = useRouter();
  const params = router.query.reviewId;
  const index = reviews.findIndex((review) => review.id === params);
  const notification = useSelector((state) => state.ui.showNotification);

  useEffect(() => {});

  const showHomePage = () => {
    router.push("/");
  };

  return (
    <Background>
      <Wrapper>
        {notification && (
          <Notification status="copy" message="클립보드에 복사되었습니다" />
        )}
        <Header>
          <button onClick={showHomePage}>뒤로가기</button>
          <div>리뷰 상세보기</div>
          <button onClick={showHomePage}>X</button>
        </Header>
        <List index={index} />
      </Wrapper>
    </Background>
  );
};

export default ReviewDetailPage;

const Background = styled.div`
  display: flex;
  background-color: lightgray;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 565px;
  /* border: solid 1px black; */
  height: 100%;
  /* margin: 10px; */
  background-color: white;
  justify-content: center;
`;

const Header = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid lightgray;

  height: 100%;
  padding: 1rem;
`;
