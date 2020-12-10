import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import RootRoutes from "./RootRoutes";
import Header from "./components/Header";
import Player from "./components/Player";
import Aside from "./components/Aside";
import { Wrapper, BodyWrapper } from "./components/Styled";

import store from "./store";
import GlobalStyle from "./styles";

export const history = createBrowserHistory();
const supportsHistory = "pushState" in window.history;

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/" forceRefresh={!supportsHistory}>
        <GlobalStyle />
        <Wrapper>
          <Aside />
          <BodyWrapper>
            <Header />
            <RootRoutes />
          </BodyWrapper>
        </Wrapper>
        <Player />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
