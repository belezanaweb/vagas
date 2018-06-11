import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

import App from "./app/App";
import rootReducer from "./reducers";
import registerServiceWorker from "./registerServiceWorker";

const middleware = applyMiddleware(thunk, logger);
const store = createStore(rootReducer, middleware);

const app = (
    <Provider store={ store }>
        <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

registerServiceWorker();
