import React, {useState} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton, Button } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import {Link} from 'react-router-dom';



import useStyles from './styles';

const Product = ({ product, onAddToCart, description }) => {
  const classes = useStyles();




  const handleAddToCart = () => onAddToCart(product.id, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" style={{fontWeight: 600}}>
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            €{product.price.formatted}
          </Typography>
        </div>
        {/* <Typography dangerouslySetInnerHTML={{ __html: product.seo.description }} variant="body2" color="textSecondary" component="p" /> */}
        {/*  {product.seo.description !== undefined && (<Typography>{product.seo.description}</Typography>)}  */}
        <Typography style={{fontWeight: 100,}}>{description}</Typography> 
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
      <Button component={Link} to={"/" + product.permalink} variant="contained" color="primary" spacing={3}>
            zum Produkt
          </Button>
        <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
          <AddShoppingCart />
        </IconButton>
        
          {/* <Button component={Link} to={"/" + product.permalink} variant="contained" color="primary">
            in den Einkaufswagen
          </Button> */}
      </CardActions>
    </Card>
  );
};

export default Product;

