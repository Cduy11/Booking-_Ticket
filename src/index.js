import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import seatReducer from "./redux/seatReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
let rootReducer = combineReducers({ seatReducer });

// tạo store và truyền vào Provider
let store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
