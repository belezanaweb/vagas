import React from "react";

import "./Products.css";
import SectionHeaderComponent from "../SectionHeader/SectionHeaderComponent";
import ProductsItemComponent from "./ProductsItemComponent";

const ProductsComponent = function (props) {

    const { products = [], showPrice = true } = props;

    return (
        <div>
            <SectionHeaderComponent text="produtos" />
            <div className="white-card round-corners">
                { products
                    .map((product, idx) => (
                        <ProductsItemComponent
                            key={ product.id }
                            showPrice={ showPrice }
                            idx={ idx }
                            { ...product }
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsComponent;
