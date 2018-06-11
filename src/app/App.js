import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import "./App.css";
import Navbar from "./navbar/NavbarComponent";

const Dummy = () => (<p>Page!</p>);

class App extends Component {

    render() {

        const routes = [
            {
                path: "/",
                component: Dummy,
                label: "home"
            }, {
                path: "/cart",
                component: Dummy,
                label: "sacola"
            }, {
                path: "/payment",
                component: Dummy,
                label: "pagamento"
            }, {
                path: "/confirmation",
                component: Dummy,
                label: "confirmação"
            }
        ];

        return (
            <Router>
                <div className="app">
                    <Navbar
                        items={ routes.filter(route => route.path !== "/") }
                    />
                    { routes
                        .map((route, idx) => (
                            <Route key={ idx } exact { ...route } />
                        ))
                    }
                </div>
            </Router>
        );
    }
}

export default App;
