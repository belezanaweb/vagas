import React from "react";

import "./Button.css";

const ButtonComponent = function (props) {

    const handleClick = function () {

        const { onClick = () => {} } = props;

        onClick();
    };

    return (
        <button
            type="button"
            className="text-button round-corners uppercase"
            onClick={ handleClick }
        >
            { props.text }
        </button>
    );
};

export default ButtonComponent;
