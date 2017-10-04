import React from "react";
import ReacDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import thunk from "redux-thunk";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import mainReducer from "./redux/reducers/index"
import App from "./main/App";
import "./index.css";

const STORE = createStore(mainReducer, applyMiddleware(thunk));

ReacDOM.render(<Router>
                    <Provider store={STORE}>
                        <App />
                    </Provider>
                </Router>, document.getElementById("root"));