import { combineReducers } from "redux";

import cartReducer from "./app/cart/duck";
import paymentReducer from "./app/payment/duck";

const rootReducer = combineReducers({
    cart: cartReducer,
    payment: paymentReducer
});

export default rootReducer;
