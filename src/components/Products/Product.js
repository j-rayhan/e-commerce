import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import utilsAction from '../../utils/constent';

const useStyles = makeStyles({
    card: {
        maxWidth: 275,
    },
    buttonRight: {
        margin: "0 0 0 33%",
    }
});
const Product = props => {
    const { id,
        sku,
        title,
        description,
        availableSizes,
        price,
        isFreeShipping } = props.product;
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt={title}
                    height="240"
                    image={`/static/images/products/${sku}_1.jpg`}
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Typography variant="body2" color="textSecondary" component="p">
                    {utilsAction.formatCurrency(price)}
                </Typography>
                <Button size="small" variant="contained" color="secondary" className={classes.buttonRight}>
                    Add to card
                </Button>
            </CardActions>
        </Card>
    )
}

export default Product;