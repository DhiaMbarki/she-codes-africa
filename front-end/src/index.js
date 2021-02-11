import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/root_Reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ChakraProvider } from "@chakra-ui/react";
import "./firebase/config";
import "./firebase/config";
import "bulma/css/bulma.min.css";
import store from "./store";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,

  document.getElementById("root")
);
