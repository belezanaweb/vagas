import React from "react";

import "./SectionHeader.css";

const SectionHeaderComponent = function (props) {
    return (
        <div className="section-header uppercase">
            { props.text }
        </div>
    );
};

export default SectionHeaderComponent;
