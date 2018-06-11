import React from "react";

import "./Loading.css";

const LoadingComponent = function (props) {

    return (
        <div className="loading-container">
            <img
                src="/spinner.gif"
                className="loading-image"
                alt="Loading"
            />
        </div>
    );
};

export default LoadingComponent;
