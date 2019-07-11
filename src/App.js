import React, { Fragment } from 'react';

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
      <h1 className="text-title">
        <span className="text-main">Tech</span> Store
      </h1>
    </Fragment>
  );
}

export default App;
