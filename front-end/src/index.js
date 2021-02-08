import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./redux/reducers/root_Reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { ChakraProvider } from "@chakra-ui/react"
const store = createStore(rootReducer, {}, composeWithDevTools());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
