import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { uiAction } from "../../store/ui-slice";
import Modal from "../ui/Modal";

const View = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.review.sort);
  const [openModal, setOpenModal] = useState(false);
  const [selectView, setSelectView] = useState(true);
  const hover = useSelector((state) => state.ui.hover);

  const showGridView = () => {
    router.push("/");
  };

  const showListView = () => {
    router.push("/list");
  };

  const showNewList = () => {
    router.push("/new-list");
  };

  const modalHandler = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      {openModal && <Modal modalHandler={modalHandler} />}
      <Sorting>
        <Button onClick={modalHandler}>
          정렬
          <Arrow src="https://static.balaan.co.kr/mobile/img/icon/search/icon-arrow-bottom@2x.png" />
        </Button>
      </Sorting>
      <SortContainer>
        <Sort>{sort}</Sort>
        <button onClick={showNewList}>새 글</button>
      </SortContainer>
      <ViewContainer>
        <GridImgContainer onClick={showGridView}>
          <Img src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-01@2x.png" />
        </GridImgContainer>
        <ListImgContainer onClick={showListView}>
          <Img src="https://static.balaan.co.kr/mobile/img/icon/contents/tab-icon-02@2x.png" />
        </ListImgContainer>
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

const GridImgContainer = styled.div`
  text-align: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 2px solid lightgray;
`;

const ListImgContainer = styled.div`
  text-align: center;
  padding: 1rem;
  width: 100%;
  border-bottom: 2px solid lightgray;
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
  color: #4348a2;
  padding: 0.3rem;
  border: 1px #4348a2 solid;
  margin: 0.5rem;
  border-radius: 20px;
`;

const SortContainer = styled.div`
  ${({ theme }) => theme.common.flexCenter}
  justify-content: space-between;
  background-color: #f9f9f9;
  padding: 0.5rem;
  padding-right: 3rem;
  > button {
    font-size: 0.5rem;
    color: #4348a2;
    background-color: #e7e8f9;
    padding: 0.5rem;
    border-radius: 20px;
  }
`;

const Sorting = styled.div`
  border-top: 1px lightgray solid;
  padding: 0.5rem;
`;

const Sort = styled.div`
  width: 70px;
  font-size: 0.5rem;
  color: #4348a2;
  padding: 0.5rem;
  background-color: #e7e8f9;
  margin: 0.5rem;
  border-radius: 20px;
  text-align: center;
  justify-content: center;
`;
