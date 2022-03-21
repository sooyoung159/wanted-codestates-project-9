import styled from "styled-components";
import Layout from "../../components/layout/Layout";
import View from "../../components/layout/View";
import List from "../../components/view/List";

const ListDetailPage = () => {
  return (
    <Wrapper>
      <Layout />
      <View />
      <List />
    </Wrapper>
  );
};

export default ListDetailPage;

const Wrapper = styled.div`
  width: 565px;
  border: solid 1px black;
  height: 100%;
  margin: 10px;
`;
