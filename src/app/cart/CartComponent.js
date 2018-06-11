import React, { Component } from "react";

import ProductsComponent from "../common/Products/ProductsComponent";
import SummaryComponent from "../common/Summary/SummaryComponent";
import ButtonComponent from "../common/Button/ButtonComponent";
import LoadingComponent from "../common/Loading/LoadingComponent";

class CartComponent extends Component {

    constructor(props) {

        super(props);

        props.beforeLoad();
    }

    nextPage() {

        const { history } = this.props;

        history.push("/payment");
    }

    render() {

        const {
            cart = {},
            products = [],
            loading = false
        } = this.props;

        if (loading) {
            return (
                <LoadingComponent />
            );
        }

        return (
            <div className="page">
                <ProductsComponent products={ products } />
                <SummaryComponent { ...cart } />
                <ButtonComponent
                    text="seguir para o pagamento"
                    onClick={ this.nextPage.bind(this) }
                />
            </div>
        );
    }
}

export default CartComponent;
