import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Contact from './pages/ContactPage';
import Default from './pages/DefaultPage';
import Home from './pages/HomePage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Fragment>
      {/* Navbar, sidebar, cart, footer */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route component={Default} />
      </Switch>
    </Fragment>
  );
}

export default App;
