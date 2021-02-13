import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Container, Button, ListItemIcon, ListItemText } from '@material-ui/core';
import { ShoppingCart} from '@material-ui/icons';
import StoreIcon from '@material-ui/icons/Store';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import { withStyles } from '@material-ui/core/styles';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import logo from '../../assets/logo-transparent.png';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [bar, setBar] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const showBar = () => {
    if(window.innerWidth <= 1000){
      setBar(false);
    }else{
      setBar(true);
    }
  };
  window.addEventListener('resize', showBar);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  

  const StyledMenu = withStyles({
    paper: {
      border: '1px solid #d3d4d5',
    },
  })((props) => (
    <Menu
      elevation={0}
      getContentAnchorEl={null}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      {...props}
    />
  ));

  const StyledMenuItem = withStyles((theme) => ({
    root: {
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
          color: theme.palette.common.white,
        },
      },
    },
  }))(MenuItem);

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );


  return (
    <>
      <AppBar /* position="fixed" */ className={classes.appBar}>
        <Toolbar className={classes.contact} style={{display: (window.innerWidth >= 1000 ? 'flex' : 'none')}}>
        {/* <Toolbar className={classes.contact} style={{}}> */}
          <Typography>+49 160 97291132</Typography>
          <Typography>Versandkostenfrei</Typography>
          <Typography>gesundheit@q-rios.de</Typography>
        </Toolbar>
        <Toolbar>
          <Typography component={Link} to="/" variant="h4" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="50px" className={classes.image} />{/* Q-Rios */}
          </Typography>
          { window.innerWidth >= 1000 ?
          (<div className={classes.inline}>
            <Typography component={Link} to="/einzelhandel" className={classes.underpage}>Einzelhandel</Typography>
            <Typography component={Link} to="/grosshandel" className={classes.underpage}>Großhandel</Typography>
            <Typography component={Link} to="/ffp2-maske" className={classes.underpage}>FFP2-Maske</Typography>
          </div>) : 
          (<div>
            <Button
              aria-controls="customized-menu"
              /* aria-haspopup="true" */
              variant="contained"
              color="default"
              onClick={handleClick}
              className={classes.mobileBtn}
              
            >
              Menu
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Container className={classes.mobileNav} onClick={handleClose} component={Link} to="/einzelhandel" >
                <ListItemIcon>
                  <StoreIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Einzelhandel" />
              </Container>
              <Container className={classes.mobileNav} onClick={handleClose} component={Link} to="/grosshandel" >
                <ListItemIcon>
                  <LocalShippingIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Großhandel" />
              </Container>
              <Container className={classes.mobileNav} onClick={handleClose} component={Link} to="/ffp2-maske" >
                <ListItemIcon>
                  <LocalHospitalIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="FFP2-Maske" />
              </Container>
            </StyledMenu>
          </div>)}
          
          <div className={classes.grow} />
          {location.pathname !== '/cart' && (
          <div className={classes.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart color="action" />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
