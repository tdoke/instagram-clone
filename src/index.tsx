import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { renderRoutes } from "react-router-config";
// import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router";
import routes from "./routes/";
import * as serviceWorker from "./serviceWorker";
import { history } from "./routes/history";
import { ThemeProvider } from "styled-components";
import { Normalize } from "styled-normalize";
import baseTheme from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import "./index.css";

const renderApp = () => (
  <React.StrictMode>
    {/* <Normalize /> */}
    <GlobalStyles />
    <ThemeProvider theme={baseTheme}>
      <Suspense fallback={<div>...loading</div>}>
        <Router history={history}>{renderRoutes(routes)}</Router>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(renderApp(), document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
