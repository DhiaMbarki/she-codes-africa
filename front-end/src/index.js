import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";



import "./firebase/config";
import "./firebase/config";
import "bulma/css/bulma.min.css";



ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
<<<<<<< HEAD
  document.getElementById("root" )
=======

  document.getElementById("root")
>>>>>>> ae4d4867ce21df429699c2f38d8da65e88933046
);
