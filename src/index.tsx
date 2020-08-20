import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { detailMiddleware } from "./middlewares/detail.middleware";
import { listMiddleware } from "./middlewares/list.middleware";
import { rootReducer } from "./reducers/";
import * as serviceWorker from "./serviceWorker";
import { initialState } from "./stores/";

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), listMiddleware, detailMiddleware],
  preloadedState: initialState as any,
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
