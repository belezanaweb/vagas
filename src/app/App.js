import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import "./App.css";
import Navbar from "./navbar/NavbarComponent";
import Cart from "./cart/CartContainer";
import Payment from "./payment/PaymentContainer";
import Confirmation from "./confirmation/ConfirmationContainer";

class App extends Component {

    render() {

        const routes = [
            {
                path: "/",
                component: Cart,
                label: "home"
            }, {
                path: "/cart",
                component: Cart,
                label: "sacola"
            }, {
                path: "/payment",
                component: Payment,
                label: "pagamento"
            }, {
                path: "/confirmation",
                component: Confirmation,
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
