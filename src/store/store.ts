import { applyMiddleware, legacy_createStore as createStore } from "redux";
import employeeReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

const store=createStore(
    employeeReducer,
    undefined,
    composeWithDevTools(applyMiddleware(logger))
);

export default store;