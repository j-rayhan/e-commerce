import React, { Fragment } from 'react';

const Product = props => {
    const { id,
        sku,
        title,
        description,
        availableSizes,
        price,
        isFreeShipping } = props.product
    return (
        <div>
            Title: {title}
        </div>
    )
}

const Products = (props) => {
    console.log('PRINT IN %s=====>', 'Products', props);
    const { products } = props;
    return (
        <Fragment>
            <h1>List of product's</h1>
            {
                products.length > 0 && products.map((p, i) => {
                    return (
                        <Product product={p} key={i} />
                    )
                })
            }
        </Fragment>
    );
};

export default Products;