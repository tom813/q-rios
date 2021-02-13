import React, {useState} from 'react';
import {Typography, Container, Grid, Button} from '@material-ui/core';
import useStyles from './styles.js';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HttpsIcon from '@material-ui/icons/Https';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Product from '../Products/Product/Product';
import Products from '../Products/Products.jsx';
import {Link} from 'react-router-dom';
import CustomAccordion from '../CostumAccordion/CustomAccordion';
import { commerce } from '../../lib/commerce';
import { toast } from "react-toastify";



const ProductPage = ({product, onAddToCart, accordionData}) => {
    const classes = useStyles();
    const [bar, setBar] = useState(false);



          /* ------try of product variant------------- */
          const { variants, assets, meta, related_products } = product;
          const [cart, setCart] = useState({});


          const handleUpdateCartQty = async (lineItemId, quantity) => {
            const response = await commerce.cart.update(lineItemId, { quantity });
        
            setCart(response.cart);
          };
      
    
          const initialVariants = React.useMemo(
            () =>
              variants.reduce((all, { id, options }) => {
                const [firstOption] = options;
        
                return { ...all, [id]: firstOption.id };
              }, {}),
            [product.permalink]
          );
        
          const [selectedVariants, setSelectedVariants] = React.useState(
            initialVariants
          );
        
        
          const addToCart = () =>
          commerce.cart
            .add(product.id, 1, selectedVariants)
            .then(({ cart }) => {
              setCart(cart);
                
              return cart;
            })
            .then(({ subtotal }) =>
              toast(
                `${product.name} is now in your cart. Your subtotal is now ${subtotal.formatted_with_symbol}. Click to view what's in your cart.`,
                /* {
                  onClick: openModal,
                } */
              )
            )
            .catch(() => {
              toast.error("Please try again.");
            });
        
        /* ----------end of try---------- */




    const showBar = () => {
        if(window.innerWidth <= 1000){
          setBar(false);
        }else{
          setBar(true);
        }
      };
      window.addEventListener('resize', showBar);


    const handleAddToCart = () => onAddToCart(product.id, 1);
    const handleAddVariantToCart = () => onAddToCart(product.variants[0].id, 1, product.variants[0])
    return (
    <>
        <Container className={classes.main} gutterBottom>
            <div className={classes.toolbar} />
            <div className={classes.toolbar} />
            
            <Grid container spacing={5} gutterBottom>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <img className={classes.productImg} src={product.media.source} />
                </Grid>
                <Grid className={classes.productDetails} style={{textAlign: (window.innerWidth <= 600 ? 'center' : null), padding: '20px'}} item xs={12} sm={12} md={6} lg={6}>
                    <Typography variant="h3" gutterBottom>{product.name}</Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" component="p" gutterBottom />
                    <Grid className={classes.priceAndQuantity} container style={{justifyContent: (window.innerWidth <= 600 ? 'center' : null)}}>
                        <Grid item>
                        <Typography className={classes.productPrice} style={{fontSize: '25px'}}>{product.price.formatted_with_symbol}</Typography>
                        </Grid>
                        <Grid item>
                            <Button className={classes.productPrice} style={{backgroundColor: (product.active ? "#1976d2" : "#dc004e"), color: 'white', fontWeight: 600 }}>{product.active ? "verfügbar" : "nicht verfügbar"}</Button>
                        </Grid>
                    </Grid>
                    <Grid container gutterBottom>
                        {product.variants.length > 0 && (product.variants[0].options.map((option) => (
                            <Grid item className={classes.option} gutterBottom>
                                <Button variant="contained" className={classes.optionName} onClick={addToCart}>{option.name}</Button> 
                                <Typography className={classes.optionPrice}>{option.price.formatted_with_symbol}</Typography>
                            </Grid> )
                        ))}
                    </Grid>
                    <Grid className={classes.iconContainer} container gutterBottom style={{justifyContent: (window.innerWidth <= 600 ? "space-evenly" : null)}}>
                        <Grid className={classes.icon} item>
                            <LocalShippingIcon gutterBottom />
                            <Typography>schneller Versand</Typography>
                        </Grid>
                        <Grid className={classes.icon} item>
                            <HttpsIcon gutterBottom />
                            <Typography>sichere Bezahlung</Typography>
                        </Grid>
                        <Grid className={classes.icon} item>
                            <VerifiedUserIcon gutterBottom />
                            <Typography>zertifizierte Produkte</Typography>
                        </Grid>
                    </Grid>
                    <Button className={classes.buyBtn} onClick={handleAddToCart} variant="contained" color="secondary">in den Warenkorb</Button>
                </Grid>
            </Grid>

            <CustomAccordion accordionData={accordionData} heading="Über unsere Produkte"  />

        <Grid container spacing={3}>
            {product.related_products.length > 0 ?
            product.related_products.map((productX) => (
                <Grid item xs={12} sm={6} md={4} lg={4} spacing={3} >
                    <Product product={productX} onAddToCart={onAddToCart} description="" />
                </Grid>
            ))
            
                : null
                
        }

        <Container gutterBottom style={{display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '80px 40px'}}>
        <Button className={classes.moreBtn} component={Link} to="/produkte" color="primary" variant="contained" style={{fontSize: (window.innerWidth <= 600 ? '20px' : null)}}>Mehr Produkte</Button>
        </Container>
        </Grid>
        
            
        </Container>

    </>
    )
}

export default ProductPage
