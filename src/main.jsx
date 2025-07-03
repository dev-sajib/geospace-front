import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App.jsx";
import "./assets/styles/index.css";
import Scroll_To_Top from "./utils/Scroll_To_Top.jsx";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Scroll_To_Top />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
