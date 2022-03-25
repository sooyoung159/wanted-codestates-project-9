import { useRouter } from "next/router";
import styled from "styled-components";
import NewListForm from "../../components/lists/NewListForm";

const NewListPage = () => {
  const router = useRouter();

  const showHomePage = () => {
    router.push("/");
  };

  return (
    <Background>
      <Wrapper>
        <Header>
          <button onClick={showHomePage}>뒤로가기</button>
          <div>새로운 리뷰 작성</div>
          <button onClick={showHomePage}>X</button>
        </Header>
        <NewListForm />
      </Wrapper>
    </Background>
  );
};

export default NewListPage;

const Background = styled.div`
  display: flex;
  background-color: lightgray;
  justify-content: space-around;
  align-items: center;
  /* height: 100vh; */
`;

const Wrapper = styled.div`
  background-color: white;
  width: 565px;
  /* border: solid 1px black; */
  height: 100%;
  /* margin: 10px; */
`;

const Header = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  height: 4rem;
  border-bottom: 1px solid lightgray;

  height: 100%;
  padding: 1rem;
`;
