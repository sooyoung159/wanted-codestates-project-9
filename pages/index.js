import styled from "styled-components";
import Layout from "../components/layout/Layout";
import View from "../components/layout/View";
import Grid from "../components/view/Grid";

const Home = () => {
  return (
    <Wrapper>
      <Layout />
      <View />
      <Grid />
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  width: 565px;
  border: solid 1px black;
  height: 100%;
  margin: 10px;
`;
