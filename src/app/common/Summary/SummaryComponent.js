import React from "react";

import "./Summary.css";
import SummaryFieldComponent from "./SummaryFieldComponent";

const SummaryComponent = function (props) {

    const {
        subTotal,
        shippingTotal,
        discount,
        total
    } = props;

    const infos = [
        {
            label: "produtos",
            value: subTotal
        }, {
            label: "frete",
            value: shippingTotal
        }, {
            label: "desconto",
            value: discount * (-1)
        }
    ];

    return (
        <div className="summary-container round-corners">
            { infos
                .map(info => (
                    <SummaryFieldComponent
                        key={ info.label }
                        { ...info }
                    />
                ))
            }
            <SummaryFieldComponent
                isTotal
                label="total"
                value={ total }
            />
        </div>
    );
};

export default SummaryComponent;
