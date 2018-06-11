import React from "react";

import "./CreditCardSummary.css";
import SectionHeaderComponent from "../common/SectionHeader/SectionHeaderComponent";

const CreditCardSummaryComponent = function (props) {

    return (
        <div className="credit-card-summary-container">
            <SectionHeaderComponent text="pagamento" />
            <div className="white-card round-corners credit-card-summary uppercase">
                <div>{ props.cardNumber }</div>
                <div>{ props.holderName }</div>
                <div>{ props.expiryDate }</div>
            </div>
        </div>
    );
};

export default CreditCardSummaryComponent;
