import Creators from "./actions";
import Api from "../../lib/Api";

const fetchCart = function () {

    return function (dispatch) {

        const { requestCart, receiveCart } = Creators;

        dispatch(requestCart());

        return Api
            .get()
            .then(json => dispatch(receiveCart(json)));
    };
};

export default {
    fetchCart
};
