import { connect } from "react-redux";

import confirmationComponent from "./ConfirmationComponent";

const mapStateToProps = function (state) {

    const { cart, payment } = state;

    return {
        cart: cart.cart,
        products: cart.products,
        payment
    };
};

const confirmationContainer = connect(mapStateToProps)(confirmationComponent);

export default confirmationContainer;
