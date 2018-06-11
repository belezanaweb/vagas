import React from "react";

import { formatCurrency } from "../../lib/util";

const ProductsItemComponent = function (props) {

    const { name, image, price, showPrice, idx } = props;

    let marginTop;

    if (showPrice) {
        if (idx === 0) {
            marginTop = null;
        } else {
            marginTop = "13px";
        }
    } else {
        if (idx === 0) {
            marginTop = "3px";
        } else {
            marginTop = "15px";
        }
    }

    const styles = {
        itemImage: {
            backgroundImage: `url("${image}")`,
            width: (showPrice) ? "60px" : "38px"
        },
        container: {
            marginTop,
            height: (showPrice) ? "calc(90px - 2 * 12px)" : "calc(62px - 2 * 12px)"
        }
    };

    const priceComp = (
        <div className="products-item-price">
            { formatCurrency(price) }
        </div>
    );

    return (
        <div className="products-item-container round-corners" style={ styles.container }>
            <div className="products-item-photo">
                <div
                    className="products-item-image"
                    style={ styles.itemImage }
                >
                </div>
            </div>
            <div className="products-item-info">
                <div className="products-item-description">
                    { name }
                </div>
                { (showPrice) ? priceComp : null }
            </div>
        </div>
    );
};

export default ProductsItemComponent;
