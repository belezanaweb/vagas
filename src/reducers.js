import { combineReducers } from "redux";

const dummy = (state = {}, action) => state;import cartReducer from "./app/cart/duck";

const rootReducer = combineReducers({
    dummy
});

export default rootReducer;
