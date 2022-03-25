import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { reviewActions } from "../../store/review-slice";
import uuid from "react-uuid";
import { storage } from "../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { sendReviewData } from "../../store/review-actions";
import Loader from "../ui/Loader";
import { useRouter } from "next/router";
import { uiAction } from "../../store/ui-slice";
// import "firebase/storage";

let isInitial = true;
let preImg =
  "https://cdn.pixabay.com/photo/2017/11/10/05/24/add-2935429_960_720.png";

const NewListForm = () => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.review);
  const router = useRouter();

  const userIdInputRef = useRef();
  const [userId, setUserId] = useState();
  const [idCheck, setIdCheck] = useState(false);
  const reviewInputRef = useRef();
  const [review, setReview] = useState();
  const [reveiwCheck, setReveiwCheck] = useState(false);
  const [levelWord, setLevelWord] = useState();
  const [previewImg, setpreviewImg] = useState(preImg);
  const [uploadImg, setUploadImg] = useState();
  const loading = useSelector((state) => state.ui.loading);
  const [starRating, setStartRating] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [formCheck, setFormCheck] = useState(true);
  const [loadingTest, setLoadingTest] = useState(false);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    dispatch(sendReviewData(reviews));
  }, [reviews, dispatch]);

  const checkForm = () => {
    if (
      idCheck &&
      reveiwCheck &&
      previewImg !== preImg &&
      starRating.filter(Boolean).length > 0
    ) {
      setFormCheck(false);
    }
  };

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
    checkForm();
  };

  const inputHandler = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    setUploadImg(file);
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setpreviewImg(reader.result);
      };
      checkForm();
    } else {
      return;
    }
  };

  const getDate = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    uploadToFirebaseStorage(uploadImg);
  };

  const uploadToFirebaseStorage = async (file) => {
    const newName = file.name
      .replace(/[~`!#$%^&*+=\-[\]\\';,/{}()|\\":<>?]/g, "")
      .split(" ")
      .join("");

    const metaData = {
      contentType: file.type,
    };

    const storageRef = ref(storage, "Images/" + newName);
    const UploadTask = uploadBytesResumable(storageRef, file, metaData);
    await UploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (progress === 100) {
          setLoadingTest(false);
        } else {
          setLoadingTest(true);
        }
        // console.log(`Upload is ${progress}% done`);
        // dispatch(uiAction.showLoading());
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(UploadTask.snapshot.ref).then((downloadUrl) => {
          dispatch(
            reviewActions.addReview({
              id: uuid(),
              userId: userId,
              starRating: starRating.filter(Boolean).length,
              image: downloadUrl,
              review: review,
            })
          );
        });
        dispatch(uiAction.showLoading());
        router.push("/");
      }
    );
  };

  const saveUserId = () => {
    setUserId(userIdInputRef.current.value);
    if (userIdInputRef.current.value.length > 3) {
      setIdCheck(true);
      checkForm();
    }
  };

  const saveReview = () => {
    setReview(reviewInputRef.current.value);
    if (reviewInputRef.current.value.length > 3) {
      setReveiwCheck(true);
      checkForm();
    }
  };

  if (loadingTest) {
    return <Loader />;
  }
  return (
    <>
      {/* {loading && <Loader />} */}
      <Wrapper>
        <form>
          {/* <Title>리뷰 작성</Title> */}
          <User>
            <label>사용자 ID</label>
            <input type="text" ref={userIdInputRef} onChange={saveUserId} />
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
                <img src={previewImg} alt="btn" />
              </Img>
            </label>
            <ImageInput
              type="file"
              id="imgUpload"
              accept="image/*"
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
              onChange={saveReview}
              placeholder="다른 분께 도움이 되는 솔직한 후기를 남겨주세요!"
            ></input>
          </ReviewArea>
          <SubmitButton
            type="submit"
            onClick={submitHandler}
            disabled={formCheck}
            formCheck={formCheck}
          >
            리뷰 남기기
          </SubmitButton>
        </form>
      </Wrapper>
    </>
  );
};

export default NewListForm;

const Wrapper = styled.div`
  display: ${(props) => (props.loading ? "none" : "")};
  height: 100vh;
  padding: 1rem;
  margin-bottom: 0px;
  padding-bottom: 0;
  > form {
    height: 100vh;
  }
`;

const User = styled.div`
  > label {
    display: block;
    padding-top: 1rem;
    padding-bottom: 2vh;
  }
  > input {
    width: 100%;
    margin-bottom: 2vh;
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
  > div {
    padding-bottom: 0.5rem;

    > img {
      width: 1.2rem;
      padding-bottom: 1rem;
    }
  }
`;

const LevelTitle = styled.div`
  padding-top: 1vh;
  padding-left: 5rem;
`;

const ImgContainer = styled.div`
  > div {
    padding-bottom: 0.5rem;
  }
  > div {
    margin-bottom: 2vh;
  }
`;

const Img = styled.div`
  text-align: center;
  > img {
    width: 20rem;
    height: 10rem;
  }
  padding-bottom: 8vh;
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
    height: 15vh;
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
  background-color: ${(props) => (props.formCheck ? "lightgray" : "black")};
  margin-bottom: 1rem;
`;
