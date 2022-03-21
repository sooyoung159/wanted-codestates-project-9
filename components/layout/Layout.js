import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Content>
        <IconWrapper>
          <Bugger />
          <Search />
          <Logo />
          <Heart />
          <Bag />
        </IconWrapper>
        <MenuWrapper>
          <div>특가</div>
          <div>
            <div src="https://static.balaan.co.kr/mobile/img/icon/oneday-delivery/ic-fast.png" />
            당일배송
          </div>
          <div>디자이너</div>
          <div>리뷰</div>
          <div>이벤트</div>
        </MenuWrapper>
      </Content>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  width: 530px;
  height: 100%;
  padding: 10px;
  margin: 10px;
  margin-bottom: 0px;
  padding-bottom: 0;
  /* border: solid 1px black; */
  /* width: 500px; */
`;

const Content = styled.div`
  width: 100%;
  /* background-color: aliceblue; */
`;

const IconWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
`;

const MenuWrapper = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  padding: 1rem;
  /* border-bottom: 1px solid black; */
`;

const Bugger = styled.div`
  width: 1.5rem;
  height: 1.4rem;
  background: url("https://static.balaan.co.kr/mobile/img/ico/ico_common2.png")
    no-repeat;
  background-position: -11.6rem 0;
  background-size: 32rem;
`;

const Search = styled.div`
  width: 2rem;
  height: 2rem;
  background: url("https://static.balaan.co.kr/mobile/img/ico/ico_common2.png")
    no-repeat;
  background-position: -13.6rem 0;
  background-size: 32rem;
`;

const Logo = styled.div`
  width: 10.5rem;
  height: 2.2rem;
  background: url("https://static.balaan.co.kr/mobile/img/ico/ico_common2.png")
    no-repeat;
  background-position: 0 -8.2rem;
  background-size: 32rem;
`;

const Heart = styled.div`
  width: 2rem;
  height: 2rem;
  background: url("https://static.balaan.co.kr/mobile/img/ico/ico_common2.png")
    no-repeat;
  background-position: -18.6rem 0;
  background-size: 32rem;
`;

const Bag = styled.div`
  width: 2rem;
  height: 2rem;
  background: url("https://static.balaan.co.kr/mobile/img/ico/ico_common2.png")
    no-repeat;
  background-position: -23.6rem 0;
  background-size: 32rem;
`;
