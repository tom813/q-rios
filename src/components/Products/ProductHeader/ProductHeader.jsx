import React from 'react';
import useStyles from './styles';
import ImgAutoMaske from '../../../assets/istockphoto-1279540262-2048x2048.jpg';
import ImgMaskeTransparent from '../../../assets/istockphoto-maske-transparent.jpg';
import ImgMaskeSchwarz from '../../../assets/istockphoto-maske-schwarz.jpg';
import {Grid, Typography, Container} from '@material-ui/core';
import CustomAccordion from '../../CostumAccordion/CustomAccordion';


const ProductHeader = ({imgOne, imgTwo, accordionData}) => {
    const classes = useStyles();

    return (
        <div className={classes.content}>
            <Container className={classes.img} gutterBottom>
                {/* <img className={classes.image} src={ImgAutoMaske} /> */}
                <div className={classes.test} style={{backgroundImage: "url(" + imgOne + ")"}}></div>
            </Container>
            <Grid container spacing={3} className={classes.space}>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <CustomAccordion accordionData={accordionData} heading="Start" />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                    <img className={classes.maskeTransparent} src={imgTwo} />
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductHeader
