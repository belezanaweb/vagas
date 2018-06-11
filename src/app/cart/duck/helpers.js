const extractProducts = function (apiCart) {

    const { items = [] } = apiCart;
    const products = [];

    items.forEach(function (item) {

        const { product, quantity } = item;

        for (let i = 0; i < quantity; i += 1) {
            products.push({
                id: `${product.sku}-${i}`,
                name: product.name,
                image: product.imageObjects[0].small,
                price: product.priceSpecification.price
            });
        }
    });

    return products;
};

export {
    extractProducts
};
