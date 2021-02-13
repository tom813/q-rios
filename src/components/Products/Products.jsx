import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import useStyles from './styles';
import CustomAccordion from '../CostumAccordion/CustomAccordion';
import ProductHeader from './ProductHeader/ProductHeader';
import { Typography } from '@material-ui/core';



const Products = ({ products, onAddToCart, category, imgOne, imgTwo, accordionData }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <>
    
    <main className={classes.content}>
    <ProductHeader gutterBottom imgOne={imgOne} imgTwo={imgTwo} accordionData={accordionData} />
      <div style={{textAlign: 'center'}}>
      <Typography variant="h3" className={classes.htwo}>Produkte</Typography>
      <Typography variant="h5" /* className={classes.htwo} */>Leider verkaufen wir im Moment keine Produkte im Einzelhandel.</Typography>
      </div>
      <Grid container justify="center" spacing={4} style={{padding: '0 20px'}}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4} style={{display: (product.categories[0] && product.categories[0].slug === category ? "block" : "none")}}>
            
            <Product product={product} onAddToCart={onAddToCart} description={product.seo.description} />
          </Grid>
        ))}
      </Grid>
          {/* <CustomAccordion accordionData={accordionData} heading="Start" /> */}
    </main>
    </>
  );
};

export default Products;

