import classNames from "classnames";
import { createContext, Suspense, useEffect, useReducer, lazy } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { Helmet } from "react-helmet";
import { useLocalStorage } from "../hooks";
import { msToNum } from "../utils/style";
import { reflow } from "../utils/transiton";
import { styles } from "../components/ThemeProvider/theme";
import { initialState, reducer } from "./reducer";

import ThemeProvider from "../components/ThemeProvider";
import Header from "../components/Header";
import VisuallyHidden from "../components/VisuallyHidden";
import "./index.css";
import "./reset.css";

const Home = lazy(() => import("../pages/Home"));

export const AppContext = createContext();
export const TransitionContext = createContext();

const App = () => {
  const [storedTheme] = useLocalStorage("theme", "dark");
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "setTheme", value: storedTheme });
  }, [storedTheme]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      <ThemeProvider themeType={state.theme}>
        <BrowserRouter>
          <AppRoutes></AppRoutes>
        </BrowserRouter>
      </ThemeProvider>
    </AppContext.Provider>
  );
};

const AppRoutes = () => {
  const location = useLocation();
  const { pathanme } = location;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`https://nm75e.csb.app/${pathanme}`} />
      </Helmet>
      <VisuallyHidden
        showOnFocus
        as="a"
        className="skip-to-main"
        href="#MainContent"
      >
        Pular para o conteúdo principal
      </VisuallyHidden>
      <Header location={location}></Header>
      <TransitionGroup
        component="main"
        className="app"
        id="MainContent"
        tabIndex={-1}
      >
        <Transition
          key={pathanme}
          timeout={msToNum(styles.base.durationS)}
          onEnter={reflow}
        >
          {(status) => (
            <TransitionContext.Provider value={status}>
              <div className={classNames("app__page", `app__page--${status}`)}>
                <Suspense fallback={<></>}>
                  <Routes location={location} key={pathanme}>
                    <Route path="/" element={<Home />} />
                  </Routes>
                </Suspense>
              </div>
            </TransitionContext.Provider>
          )}
        </Transition>
      </TransitionGroup>
    </>
  );
};

export default App;
