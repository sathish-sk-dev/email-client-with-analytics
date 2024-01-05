import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux-toolkit/store/store";
import { Provider } from "react-redux";
import Routes from "./routes/routes";
import { BrowserRouter } from "react-router-dom";
import { ProviderWrapper } from "./components/provider-wrapper/ProviderWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProviderWrapper>
        {/*<App />*/}
        <BrowserRouter basename="/">
          <Routes />
        </BrowserRouter>
      </ProviderWrapper>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
