import React, {useState, useEffect} from 'react';
import { Container, Typography, Button, Grid, Checkbox, FormGroup, FormControlLabel, FormControl, FormLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();
  const [law, setLaw] = useState(false);

  const toggleLaw = () => {
    setLaw((prev) => !prev)};

    useEffect(() => {
      toggleLaw();
    }, []);

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="h4" style={{textAlign: 'center'}}>Dein Einkaufswagen ist leer, fülle ihn mit dem, <span style={{margin: '0 .5px'}} />
      <Link className={classes.link} to="/einzelhandel">was dir gefällt</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={6} md={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div  className={classes.cardDetails}>
      <FormControl component="fieldset">
      <FormLabel component="legend" gutterBottom>Zustimmung erforderlich</FormLabel>
      <FormGroup aria-label="position" row>
        
        <FormControlLabel
          value="end"
          control={<Checkbox color="primary" />}
          /* label={"x"} */
          labelPlacement="end"
          onClick={toggleLaw}
        /> <Typography style={{alignSelf: 'center'}}>Ich stimme den <Typography component={Link} to="/agb"> AGB</Typography> 
        <span style={{margin: '0 .5px'}} /> zu. Bitte beachten Sie auch die <Typography component={Link} to="/datenschutzbestimmung"> Datenschutzbestimmungen</Typography> 
        <span style={{margin: '0 .5px'}} /> und die <span style={{margin: '0 .5px'}} /> <Typography component={Link} to="/widerrufsbelehrung"> Widerrufsbelehrung</Typography>.</Typography>
        
{/*           <Typography className={classes.lawLink} component={Link} to="/agb">Agbs</Typography>
          <Typography className={classes.lawLink} component={Link} to="/datenschutzerklearung">Datenschutzerklärung</Typography>
          <Typography className={classes.lawLink} component={Link} to="/widerrufsbelehrung">Widerrufsbelehrung</Typography> */}
        
      </FormGroup>
    </FormControl>
      </div>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Gesamt: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>leeren</Button>
          <Button className={classes.checkoutButton} disabled={law ? true : false} component={Link} to="/checkout" size="large" type="button" variant="contained" color="primary">Bezahlen</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      
      <div className={classes.toolbar} />
      <div className={classes.centerHeadline}>
      <Typography className={classes.title} variant="h3" gutterBottom>Dein Einkaufswagen</Typography>
      </div>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
