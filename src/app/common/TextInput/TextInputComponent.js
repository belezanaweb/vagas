import React from "react";

import "./TextInput.css";
import TextInputLabelComponent from "./TextInputLabelComponent";

const TextInputComponent = function (props) {

    const handleInput = function (evt) {

        const { onInput = () => {} } = props;
        const input = evt.currentTarget;

        const newVal = onInput(input.value);

        if (newVal !== undefined) {
            input.value = newVal;
        }
    };

    const {
        label = "",
        type = "text",
        maxLength = null,
        name = null,
        placeholder = null,
        required = false,
        style = {},
        pattern = null
    } = props;

    return (
        <div className="text-input-container" >
            <TextInputLabelComponent
                text={ label }
            />
            <input
                className="text-input round-corners"
                type={ type }
                name={ name }
                placeholder={ placeholder }
                maxLength={ maxLength }
                required={ required }
                style={ style }
                onInput={ handleInput }
                pattern={ pattern }
            />
        </div>
    );
};

export default TextInputComponent;
