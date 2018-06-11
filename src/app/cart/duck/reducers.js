import types from "./types";
import { extractProducts } from "./helpers"

const INITIAL_STATE = {
    cart: {},
    products: [],
    loading: true
};

const cartReducer = function (state = INITIAL_STATE, action) {

    switch (action.type) {
    case types.REQUEST_CART:

        return {
            ...state,
            loading: true
        };

    case types.RECIEVE_CART:

        const { payload } = action;

        return {
            ...state,
            loading: false,
            cart: payload,
            products: extractProducts(payload)
        };

    default:
        return state;
    }
};

export default cartReducer;
