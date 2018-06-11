import { connect } from "react-redux";

import PaymentComponent from "./PaymentComponent";
import { paymentOperations } from "./duck";

const mapStateToProps = function (state) {

    const { cart } = state.cart;

    return { cart };
};

const mapDispatchToProps = function (dispatch) {

    const { saveCreditCard } = paymentOperations;

    return {
        saveCreditCard: cardData => dispatch(saveCreditCard(cardData))
    };
};

const PaymentContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentComponent);

export default PaymentContainer;
