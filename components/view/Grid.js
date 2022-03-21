import styled from "styled-components";

const Grid = () => {
  return (
    <Wrapper>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
      <GridItem>1</GridItem>
      <GridItem>2</GridItem>
      <GridItem>3</GridItem>
    </Wrapper>
  );
};

export default Grid;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 200px 200px 200px;
  width: 100%;
  height: 100%;
`;

const GridItem = styled.div`
  background-color: gray;
  margin: 1px;
`;
