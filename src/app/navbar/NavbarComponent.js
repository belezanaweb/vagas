import React from "react";

import "./Navbar.css";
import NavItemComponent from "./NavItemComponent";

const NavbarComponent = function (props) {

    const { items = [] } = props;

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                { items
                    .map((item, idx) => (
                        <NavItemComponent
                            key={ idx }
                            { ...item }
                        />
                    ))
                }
            </ul>
        </nav>
    );
};

export default NavbarComponent;
