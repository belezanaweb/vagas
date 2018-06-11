import React from "react";

import "./CreditCard.css";
import SectionHeaderComponent from "../common/SectionHeader/SectionHeaderComponent";
import TextInputComponent from "../common/TextInput/TextInputComponent";
import {
    creditCardFormat,
    underscoreThinSpace
} from "../lib/util";
import {
    onCreditCardInput,
    onHolderNameInput,
    onExpiryDateInput,
    onCvvInput
} from "./validators";

const mapInputs = function (inputs, fullWidth) {

    return inputs
        .filter(input => input.fullWidth === fullWidth)
        .map(input => (
            <TextInputComponent
                key={ input.name }
                { ...input }
            />
        ));
};

const onSubmit = function (evt) {
    evt.preventDefault();
};

const CreditCardComponent = function (props) {

    const inputs = [
        {
            label: "Número do cartão:",
            name: "cardNumber",
            placeholder: creditCardFormat(),
            onInput: onCreditCardInput,
            fullWidth: true,
            required: true,
            pattern: "([0-9]{4}.){3}[0-9]{4}"
        }, {
            label: "Nome do Titular:",
            name: "holderName",
            placeholder: "Como no cartão",
            onInput: onHolderNameInput,
            style: {
                letterSpacing: "unset"
            },
            fullWidth: true,
            required: true
        }, {
            label: "Validade (mês/ano):",
            name: "expiryDate",
            placeholder: `${underscoreThinSpace(2)}/${underscoreThinSpace(4)}`,
            onInput: onExpiryDateInput,
            fullWidth: false,
            required: true,
            pattern: "[0-9]{2}/[0-9]{4}"
        }, {
            label: "CVV:",
            name: "cvv",
            placeholder: `${underscoreThinSpace(3)}`,
            onInput: onCvvInput,
            fullWidth: false,
            required: true,
            pattern: "[0-9]{3}"
        }
    ];

    return (
        <div>
            <SectionHeaderComponent text="cartão de crédito" />
            <form className="white-card round-corners credit-card-form" onSubmit={ onSubmit } action="/">
                { mapInputs(inputs, true) }
                <div className="half-width-inputs">
                    { mapInputs(inputs, false) }
                </div>
            </form>
        </div>
    );
};

export default CreditCardComponent;
