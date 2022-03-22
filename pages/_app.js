import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import store from "../store";
import GlobalStyle from "../styles/GlobalStyle";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
