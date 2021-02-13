import React, { useState, useEffect } from 'react';
import { CssBaseline, Container, Typography } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Products, Cart, Checkout, StartingPage, Footer, ProductPage, Agb, Impressum, Datenschutz, Widerrufsbelehrung } from './components';
import { commerce } from './lib/commerce';
import ProductImgOneEh from './assets/qrios-shop3.jpg';
import ProductImgTwoEh from './assets/istockphoto-maske-schwarz.jpg';
import ProductImgOneGh from './assets/qrios-shop4.jpg';
import ProductImgTwoGh from './assets/qrios-shop5.jpg';
import {accordionDataEh, accordionDataGh, accordionDataSp} from './components/CostumAccordion/AccordionData';
import Card from './components/responsive/responsive2';
import { toast } from "react-toastify";



const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [test, setTest] = useState({});
  const [startProducts, setStartProducts] = useState([]);

  const startingProducts = [];

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    
    setProducts(data);
    
    for(var i = 0; i < data.length + 1; i++){
      if(data[i]){
        // console.log(data[i].categories) 
      for(var j = 0; j < data[i].categories.length; j++){
        if (data[i].categories[j].name == "startseite"){
          startingProducts.push(data[i])
        }}}
    };
    setStartProducts(startingProducts);
    console.log(startingProducts);
  };
  console.log(products);

  const fetchCategories = async () => {
    /* const {cat} = await commerce.categories.list();

    setCategory(cat); */
    commerce.categories.list().then((category) => {
      for (var i = 0; i < 4; i++){
        console.log(category)
      }
    });
  };

  
  /* if (products !== []){
    console.log(products[0].seo.title);
  } */

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity, selectedVariants) => {
    const item = await commerce.cart.add(productId, quantity, selectedVariants);

    setCart(item.cart);
    console.log(productId, quantity, selectedVariants);
  };


  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
/*   console.log('####################');
  const createUnderpage = () => {
    const linkList = [];
    for (let key in products){ 
      var perLink = products[key].permalink;
      linkList.push(perLink);
    };
    console.log(linkList);
    return linkList
  } 
  const mapData = createUnderpage(); */

/*   const startPageProducts = () => {
    const startingProducts = [];
    for(var i = 0; i < products.length + 1; i++){
      console.log(products[i])
    }
    console.log("executed")
  }
  startPageProducts(); */


  return (
    
    <Router>
      <Container style={{padding: '0'}}>
      <div style={{ display: 'flex'}}>
      
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle}  />
        
        <Switch >
          <Route exact path="/" >
            <StartingPage 
            products={startProducts} 
            onAddToCart={handleAddToCart} 
            accordionData={accordionDataSp}
            handleUpdateCartQty />
            
          </Route>
          <Route exact path="/einzelhandel" >
            <Products 
            products={products} 
            onAddToCart={handleAddToCart} 
            category="einzelhandel" 
            imgOne={ProductImgOneEh}
            imgTwo={ProductImgTwoEh}
            accordionData={accordionDataEh}
            handleUpdateCartQty />

          </Route>
          <Route exact path="/grosshandel">
            <Products 
            products={products} 
            onAddToCart={handleAddToCart} 
            category="grosshandel" 
            imgOne={ProductImgOneGh}
            imgTwo={ProductImgTwoGh}
            accordionData={accordionDataGh}
            handleUpdateCartQty />

          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
          <Route path="/impressum" exact>
            <Impressum />
          </Route>
          <Route path="/datenschutz" exact>
            <Datenschutz />
          </Route>
          <Route path="/agb" exact>
            <Agb />
          </Route>
          <Route path="/widerrufsbelehrung" exact>
            <Widerrufsbelehrung />
          </Route>
          <Route path="/testing" exact> 
            <Card />
          </Route>
          {/* Widerrufsbelehrung */}
          {/* {mapData.map((link) => (
        <Route path={"/" + link} key={link.id} exact>
          <ProductPage products={products} />
        </Route>
      ))} */}
      {products.map((product) => (
        <Route path={"/" + product.permalink} key={product.id} exact>
          <ProductPage 
          product={product} 
          onAddToCart={handleAddToCart} 
          onUpdateCartQty={handleUpdateCartQty}  
          accordionData={accordionDataEh}
          />
        </Route>
      ))}
        </Switch>
        
      </div>
      
      </Container>
      <Footer products={products} />
    </Router>
    
  );
};


export default App;
