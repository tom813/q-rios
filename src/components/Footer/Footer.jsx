import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import {Link} from 'react-router-dom';
import useStyles from './styles';

const Footer = ({products}) => {
    const classes = useStyles();
    return (
        <Grid container className={classes.container}>
        
            <Grid item className={classes.footer} xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h4" gutterBottom color="white">Rechtliches</Typography>
                <Typography className={classes.footerLinks} component={Link} to="/impressum">Impressum</Typography> <br />
                <Typography className={classes.footerLinks} component={Link} to="/datenschutz">Datenschutz</Typography> <br />
                <Typography className={classes.footerLinks} component={Link} to="/agb">Agb</Typography> <br />
                <Typography className={classes.footerLinks} component={Link} to="/widerrufsbelehrung">Widerrufsbelehrung</Typography>
            </Grid>
            <Grid item className={classes.footer} xs={12} sm={12} md={4} lg={4}>
            <Typography variant="h4" gutterBottom color="white">Produkte</Typography>
                {products.map((product) => (
                    <div key={product.id}>
                        <Typography className={classes.footerLinks} component={Link} to={"/" + product.permalink}>{product.name}</Typography>
                    </div>
                ))}
                
            </Grid>
            
            <Grid item className={classes.footer} xs={12} sm={12} md={4} lg={4}>
                <Typography variant="h3" style={{width: '100%'}} >Q-Rios</Typography>  
            </Grid>
        </Grid>
    )
}

export default Footer;
