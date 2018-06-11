import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import CreditCardComponent from "./CreditCardComponent";
import SummaryComponent from "../common/Summary/SummaryComponent";
import ButtonComponent from "../common/Button/ButtonComponent";

class PaymentComponent extends Component {

    nextPage() {

        const { history } = this.props;

        history.push("/confirmation");
    }

    onSave() {

        const form = document.querySelector("form.white-card.round-corners.credit-card-form");

        if (!form.reportValidity()) {
            form.dispatchEvent(new Event("submit"));
            return;
        }

        const fd = new FormData(form);

        this.props.saveCreditCard({
            cardNumber: fd.get("cardNumber"),
            holderName: fd.get("holderName"),
            expiryDate: fd.get("expiryDate"),
            cvv: fd.get("cvv")
        });

        this.nextPage();
    }

    render() {

        const { cart } = this.props;

        if (!cart.hasOwnProperty("total")) {
            return (
                <Redirect to={{ pathname: "/cart" }} />
            );
        }

        return (
            <div className="page">
                <CreditCardComponent />
                <SummaryComponent { ...cart } />
                <ButtonComponent
                    text="finalizar o pedido"
                    onClick={ this.onSave.bind(this) }
                />
            </div>
        );
    }
};

export default PaymentComponent;
