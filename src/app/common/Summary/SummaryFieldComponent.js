import React from "react";

import { formatCurrency } from "../../lib/util";

const SummaryFieldComponent = function (props) {

    let className;

    switch (props.label) {
    case "total":
        className = "summary-total";
        break;
    case "desconto":
        className = "summary-info summary-discount";
        break;
    default:
        className = "summary-info";
        break;
    }

    return (
        <div className={ `summary-field uppercase ${ className }` }>
            <div className="summary-label">
                { props.label }
            </div>
            <div className="summary-value">
                { formatCurrency(props.value) }
            </div>
        </div>
    );
};

export default SummaryFieldComponent;
