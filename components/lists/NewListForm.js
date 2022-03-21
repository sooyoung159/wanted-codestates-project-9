import { useRef, useState } from "react";
import styled from "styled-components";

const NewListForm = () => {
  const reviewInputRef = useRef();
  const [levelWord, setLevelWord] = useState();
  const [uploadImg, setUploadImg] = useState(
    "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png"
  );
  const [starRating, setStartRating] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  // console.log(starRating.filter(Boolean).length);

  const ratingHandler = (idx) => {
    const clicked = [...starRating];
    for (let i = 0; i < clicked.length; i++) {
      clicked[i] = i <= idx ? true : false;
      switch (idx + 1) {
        case 1:
          setLevelWord("아쉬워요!");
          break;
        case 2:
          setLevelWord("그냥 그래요");
          break;
        case 3:
          setLevelWord("보통이에요!");
          break;
        case 4:
          setLevelWord("좋아요!");
          break;
        case 5:
          setLevelWord("최고예요!");
          break;
        default:
          break;
      }
    }
    setStartRating(clicked);
  };

  const inputClick = (event) => {
    fileRef.current.click();
  };

  const inputHandler = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];

    if (file) {
      reader.onloadend = () => {
        setUploadImg(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      return;
    }
  };

  const satisfaction = () => {
    switch (starRating.filter(Boolean).length) {
      case 1:
        setLevelWord("아쉬워요!");
        break;
      case 2:
        setLevelWord("그냥 그래요");
        break;
      case 3:
        setLevelWord("보통이에요!");
        break;
      case 4:
        setLevelWord("좋아요!");
        break;
      case 5:
        setLevelWord("최고예요!");
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper>
      <form>
        {/* <Title>리뷰 작성</Title> */}
        <User>
          <label>사용자 ID</label>
          <input type="text" />
        </User>
        <StarContainer>
          <div>만족도</div>
          <StarLevel>
            <div>
              {starRating.map((star, idx) => {
                return (
                  <img
                    key={idx}
                    src={
                      star
                        ? "https://i.balaan.io/mobile/img/icons/icon-star-black.png"
                        : "https://i.balaan.io/mobile/img/icons/icon-star-gray.png"
                    }
                    onClick={() => ratingHandler(idx)}
                  />
                );
              })}
            </div>
            {levelWord && <LevelTitle>{levelWord}</LevelTitle>}
          </StarLevel>
        </StarContainer>
        <ImgContainer>
          <div>사진 추가</div>
          <label htmlFor="imgUpload">
            <Img>
              <img src={uploadImg} alt="btn" />
            </Img>
          </label>
          {/* <button onClick={inputClick}>
          여기로 되게 만들어보자{fileRef.current}
        </button> */}
          <ImageInput
            type="file"
            id="imgUpload"
            // accept="image/jpg,impge/png,image/jpeg,image/gif"
            onChange={inputHandler}
          />
        </ImgContainer>
        <ReviewArea>
          <label>후기 남기기</label>
          <input
            id="description"
            required
            rows="5"
            ref={reviewInputRef}
            placeholder="다른 분께 도움이 되는 솔직한 후기를 남겨주세요!"
          ></input>
        </ReviewArea>
        <SubmitButton>리뷰 남기기</SubmitButton>
      </form>
    </Wrapper>
  );
};

export default NewListForm;

const Wrapper = styled.div`
  height: 100%;
  padding: 1rem;
  margin-bottom: 0px;
  padding-bottom: 0;
`;

const User = styled.div`
  > label {
    display: block;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }
  > input {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const StarContainer = styled.div`
  > div {
    padding-bottom: 0.5rem;
  }
  > img {
    width: 1.2rem;
    padding-bottom: 1rem;
  }
`;

const StarLevel = styled.div`
  display: flex;
  /* justify-content: space-between; */
  > div {
    padding-bottom: 0.5rem;

    > img {
      width: 1.2rem;
      padding-bottom: 1rem;
      /* padding-left: 5rem; */
    }
  }
`;

const LevelTitle = styled.div`
  padding-top: 0.1rem;
  padding-left: 5rem;
`;

const ImgContainer = styled.div`
  > div {
    padding-bottom: 0.5rem;
  }
`;

const Img = styled.div`
  text-align: center;
  > img {
    width: 20rem;
    height: 15rem;
  }
  padding-bottom: 1rem;
`;

const ImageInput = styled.input`
  display: none;
`;
// const Start = styled.div`
//   background-image: url(${whiteStar});
// `;

const ReviewArea = styled.div`
  width: 100%;
  > label {
    display: block;
    padding-bottom: 0.5rem;
  }
  > input {
    display: block;
    width: 99%;
    height: 5rem;
    resize: none;
    border: 1px solid black;
    margin-bottom: 1rem;
    /* margin-right: 0.5rem; */
  }
`;

const SubmitButton = styled.button`
  color: white;
  width: 100%;
  height: 2rem;
  background-color: black;
  margin-bottom: 1rem;
`;

const Review = styled.textarea`
  width: 100%;
  /* height: 300px; */
  border: 1px solid black;
  resize: none;
  padding: 0.5rem;
  /* margin-right: 1rem; */
`;
