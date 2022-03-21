import { useRouter } from "next/router";
import styled from "styled-components";

const View = () => {
  const router = useRouter();

  const showGridView = () => {
    router.push("/");
  };

  const showListView = () => {
    router.push("/list-detail");
  };

  const showNewList = () => {
    router.push("/new-list");
  };

  return (
    <div>
      <Sorting>
        <Button>
          정렬
          <Arrow src="https://static.balaan.co.kr/mobile/img/icon/search/icon-arrow-bottom@2x.png" />
        </Button>
      </Sorting>
      <SortContainer>
        <Sort>정렬 표시</Sort>
        <button onClick={showNewList}>새 글</button>
      </SortContainer>
      <ViewContainer>
        <ImgContainer onClick={showGridView}>
          <Img src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png" />
        </ImgContainer>
        <ImgContainer onClick={showListView}>
          <Img src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png" />
        </ImgContainer>
      </ViewContainer>
    </div>
  );
};

export default View;

const ViewContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  /* display: flex; */
  justify-content: space-around;
`;

const ImgContainer = styled.div`
  text-align: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 1px solid gray;
`;

const Img = styled.img`
  max-width: 2rem;
  max-width: 2rem;
`;

const Arrow = styled.img`
  max-width: 20%;
  max-height: 20%;
  font-size: 1px;
  /* padding-top: 0.3rem; */
  margin-left: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.3rem;
  border: 1px blue solid;
  margin: 0.5rem;
  border-radius: 20px;
`;

const SortContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  background-color: lightgray;
  padding: 0.5rem;
  padding-right: 3rem;
`;

const Sorting = styled.div`
  border-top: 1px lightgray solid;
  padding: 0.5rem;
`;

const Sort = styled.div`
  width: 70px;
  font-size: 1rem;
  padding: 0.5rem;
  border: 1px blue solid;
  margin: 0.5rem;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
`;
