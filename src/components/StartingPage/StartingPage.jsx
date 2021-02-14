import React, {useState} from 'react';
import useStyles from './styles.js';
import ImgMaske from '../../assets/qrios-shop1.jpg';
import ImgAerzte from '../../assets/qrios-shop2.jpg';
import {Container, Grid, Typography, CssBaseline, Button, CircularProgress, LinearProgress} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Product from '../Products/Product/Product';
import Footer from '../Footer/Footer';
import CustomAccordion from '../CostumAccordion/CustomAccordion';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import json2mq from 'json2mq';




const StartingPage = ({products, onAddToCart, accordionData}) => {
    const classes = useStyles();
    const product1 = products[0];
    const product2 = products[1];
    const product3 = products[2];
    const [bar, setBar] = useState(false);
    

    console.log(products);
    console.log(products.length);

    const matches = useMediaQuery(
        json2mq({
          minWidth: 1200,
        }),
      );

      const matches2 = useMediaQuery(
          json2mq({
              minWidth: 900,
          }),
      );

      const matches3 = useMediaQuery(
        json2mq({
            minWidth: 100,
        }),
    )
    
      /* const chooseClass(classLd, classSm, classXs) {

        

          if(matches && classLd){
              return classes.classLd
          }
          else if(matches2 && classSm){
              return classes.classSm
          }
          else if(matches3 && classXs){
              return classes.classXs
          }
      } */

      const showBar = () => {
        if(window.innerWidth <= 1000){
          setBar(false);
        }else{
          setBar(true);
        }
      };
      window.addEventListener('resize', showBar);
    
    if (!products.length) return <Container style={{padding: '200px 0', textAlign: 'center'}}>
        <CircularProgress />
    </Container>;

    return (
    <>
    
        <div className={classes.content}>
            <div className={classes.toolbar} />
            
            <div className={classes.img}>
                {/* <img className={classes.image} src={ImgMaske} /> */}
                <div className={classes.bg} style={{backgroundImage: "url(" + ImgMaske + ")",}}>
                    <Grid container style={{height: '400px', display: 'flex', alignItems: 'center',}}>
                        <Grid item xs={12} sm={8} md={5} lg={5} className={classes.headingBox} style={{textAlign: (window.innerWidth <= 600 ? "center" : null)}}>
                            <div style={{display: 'block'}}>
                                <Typography className={classes.headline} variant="h2" style={{fontSize: (window.innerWidth <= 600 ? "35px" : null)}}>Q-Rios</Typography>
                                <br /><br />
                                <Typography className={classes.underHeadline} gutterBottom>Händler für Hygieneartikel und Masken,<br /> schnelle Lieferung, sichere Bezahlung</Typography>
                                
                                <Button className={classes.ctaBtn} variant="contained" color="primary">zu den Produkten</Button>
                            </div>
                        </Grid>
                        
                    </Grid>
                </div>
            </div>
            
            <Grid container spacing={5} style={{margin: (window.innerWidth >= 960 ? '40px 0': '40px auto'), padding: '0 0px', width: (window.innerWidth >= 960 ? '100%' : '90%'), display: 'flex', alignItems: 'stretch'}}>
                
                {/* <Grid item xs={12} sm={12} md={4} lg={4} style={{alignSelf: 'center', padding: '0px', }}>
                    <Typography variant="h2" style={{fontSize: '25px'}}>Jetzt zugreifen!</Typography>
                    <br />
                    <Typography>unsere beliebtesten Produkte: FFP2 Masken zum günstigen Preis und Stoffmasken von hoher Qualität</Typography>
                </Grid> */}
                <Grid item xs={12} sm={12} md={4} lg={4} style={{padding: (window.innerWidth >= 960 ? '0 10px' : '30px 0px') }}>
                    <Product product={product1} className={classes.startProduct} description={product1.seo.description} onAddToCart={onAddToCart} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} style={{padding: (window.innerWidth >= 960 ? '0 10px' : '30px 0px')}}>
                <Product product={product2} className={classes.startProduct} description={product2.seo.description} onAddToCart={onAddToCart} />
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} style={{padding: (window.innerWidth >= 960 ? '0 10px' : '30px 0px')}}>
                <Product product={product3} className={classes.startProduct} description={product2.seo.description} onAddToCart={onAddToCart} />
                </Grid>
            </Grid>
            
            {/* <div className={classes.bg} style={{backgroundImage: "url(" + ImgAerzte + ")",}}>
                    <Grid container className={classes.headingBox} style={{height: '600px', display: 'flex', alignItems: 'center', }}>
                        <Grid item xs={0} sm={0} md={7} lg={7}></Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} style={{alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center',  }}>
                            <div className={classes.secondHeader} style={{textAlign: (window.innerWidth <= 600 ? "center" : null)}}>
                                <Typography className={classes.headline} style={{fontSize: (window.innerWidth <= 600 ? "35px" : null)}} variant="h2">Q-Rios</Typography>
                                <br /><br />
                                <Typography className={classes.underHeadline} gutterBottom>Händler für Hygieneartikel und Masken,<br /> schnelle Lieferung, sichere Bezahlung</Typography>
                                
                                <Button className={classes.ctaBtn} variant="contained" color="primary">zu den Produkten</Button>
                            </div>
                        </Grid>
                        
                    </Grid>
                </div> */}
            <div style={{width: (window.innerWidth >= 600 ? null : '90%'), margin: '40px auto'}}>
                <CustomAccordion accordionData={accordionData} heading="Häufige Fragen" />
            </div>
        </div>
        
    </>
    )
}

export default StartingPage;
