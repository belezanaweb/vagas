import { connect } from "react-redux";

import CartComponent from "./CartComponent";
import { cartOperations } from "./duck";

const mapStateToProps = function (state) {

    const { cart, products, loading } = state.cart;

    return { cart, products, loading };
};

const mapDispatchToProps = function (dispatch) {

    const { fetchCart } = cartOperations;

    return {
        beforeLoad: () => dispatch(fetchCart())
    };
};

const CartContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);

export default CartContainer;
