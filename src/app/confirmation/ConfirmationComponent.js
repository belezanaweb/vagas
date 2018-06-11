import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import SuccessComponent from "./SuccessComponent";
import CreditCardSummaryComponent from "./CreditCardSummaryComponent";
import ProductsComponent from "../common/Products/ProductsComponent";
import SummaryComponent from "../common/Summary/SummaryComponent";

class ConfirmationComponent extends Component {

    render() {

        const {
            cart,
            products,
            payment
        } = this.props;

        if (!cart.hasOwnProperty("total") || payment.cardNumber === "") {
            return (
                <Redirect to={{ pathname: "/cart" }} />
            );
        }

        return (
            <div className="page">
                <SuccessComponent />
                <CreditCardSummaryComponent { ...payment } />
                <ProductsComponent products={ products } showPrice={ false } />
                <SummaryComponent { ...cart } />
            </div>
        );
    }
};

export default ConfirmationComponent;
