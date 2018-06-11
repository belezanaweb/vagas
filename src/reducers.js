import { combineReducers } from "redux";

const dummy = (state = {}, action) => state;

const rootReducer = combineReducers({
    dummy
});

export default rootReducer;
