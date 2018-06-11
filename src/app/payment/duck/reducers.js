import types from "./types";

const INITIAL_STATE = {
    cardNumber: "",
    expiryDate: "",
    holderName: ""
};

const paymentReducer = function (state = INITIAL_STATE, action) {

    switch (action.type) {
    case types.SAVE_CREDIT_CARD:

        const {
            cardNumber,
            expiryDate,
            holderName
        } = action.payload;

        return {
            ...state,
            cardNumber: cardNumber.replace(/\d{4}\.(?=\d)/g, "****."),
            expiryDate,
            holderName
        };

    default:
        return state;
    }
};

export default paymentReducer;
