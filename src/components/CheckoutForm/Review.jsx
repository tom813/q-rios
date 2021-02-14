import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken }) => ( 
  <>
    <Typography variant="h6" gutterBottom>Zusammenfassung</Typography>
    <List disablePadding>
      {checkoutToken.live.line_items.map((product) => (
        <ListItem style={{ padding: '10px 0' }} key={product.name}>
          <ListItemText primary={product.name} secondary={`Menge: ${product.quantity}`} />
          <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
          <input name="input1" value={product.name} style={{display: 'none'}} />
          <input name="input2" value={product.quantity} style={{display: 'none'}} />
          <input name="input3" value={product.line_total.formatted_with_symbol} style={{display: 'none'}} />
          {/* {product.map((oneProduct) => (
            <div key={oneProduct.id}>
              <input value={oneProduct.name} name="input1" style={{display: 'none'}}/>
              <input value={oneProduct.quantity} name="input2" style={{display: 'none'}}/>
              <input value={oneProduct.line_total.formatted_with_symbol} name="input3" style={{display: 'none'}}/>
            </div>
          ))} */}
        </ListItem>
      ))}
      <ListItem style={{ padding: '10px 0' }}>
        <ListItemText primary="Gesamt" /> 
        <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
          {checkoutToken.live.subtotal.formatted_with_symbol}
        </Typography>
      </ListItem>
    </List>
  </>
);

export default Review;
