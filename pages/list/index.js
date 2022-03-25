import { useSelector } from "react-redux";
import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import View from "../../components/layout/View";
import Notification from "../../components/ui/Notification";
import List from "../../components/view/List";

const ListDetailPage = () => {
  return (
    <Background>
      <Wrapper>
        <Layout />
        <View />
        <List />
      </Wrapper>
    </Background>
  );
};

export default ListDetailPage;

const Background = styled.div`
  display: flex;
  background-color: lightgray;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 565px;
  border: solid 1px white;
  height: 100%;
  /* margin: 10px; */
`;
