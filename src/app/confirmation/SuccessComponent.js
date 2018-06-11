import React from "react";
import CheckIcon from "react-icons/lib/io/ios-checkmark-outline";

import "./Success.css";

const SuccessComponent = function (props) {

    return (
        <div className="success-container">
            <CheckIcon
                className="success-icon"
                color="#FF6808"
                size={ 60 }
            />
            <div className="success-message uppercase">
                compra efetuada com sucesso
            </div>
        </div>
    );
};

export default SuccessComponent;
