import React, { Fragment } from 'react';
import Product from './Product';
import { Grid } from '@material-ui/core';

const Products = (props) => {
    const { products } = props;
    return (
        <Fragment>
            <Grid item xs={12}>
                <h1>List of product's</h1>
                <Grid container justify="start" spacing={2}>
                    {
                        products.length > 0 && products.map((p, i) => {
                            return (
                                <Grid key={i} item>
                                    <Product product={p} key={i} />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Products;