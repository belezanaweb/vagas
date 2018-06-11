import React from "react";

const NavItemComponent = function (props) {

    let className = "nav-item uppercase";

    if (props.active) {
        className += " active";
    }

    return (
        <li className={ className }>
            { props.label }
        </li>
    );
};

export default NavItemComponent;
