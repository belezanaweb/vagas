import types from "./types";

const requestCart = () => ({
    type: types.REQUEST_CART
});

const receiveCart = (cart) => ({
    type: types.RECIEVE_CART,
    payload: cart
});

export default {
    requestCart,
    receiveCart
};
