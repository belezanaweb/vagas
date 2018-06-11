import types from "./types";

const storeCreditCard = (cardInfo) => ({
    type: types.SAVE_CREDIT_CARD,
    payload: cardInfo
});

export default {
    storeCreditCard
};
