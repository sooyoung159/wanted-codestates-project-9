const deviceSizes = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;

// font size
const fontSizes = {
  big: pixelToRem(35),
  middle: pixelToRem(30),
  small: pixelToRem(25),
  xSmall: pixelToRem(20),
  xxSmall: pixelToRem(15),
};

// color
const colors = {
  black: "#000000",
  white: "#eee",
  grey: "#999999",
  green: "#04d363",
  lightGreen: "#62ff93",
  darkGreen: "#00a035",
  blue: "#34dbca",
  lightBlue: "#77fffd",
  darkBlue: "#00a999",
  red: "#ff6670",
  lightRed: "#eb4d47",
};

// 자주 사용하는 스타일 속성
const common = {
  flexCenter: `
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
};

const theme = {
  fontSizes,
  colors,
  common,
  device,
};

export default theme;
