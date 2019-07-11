import React, { Component } from 'react';
import { items } from './productData';
import { linkData } from './linkData';
import { socialData } from './socialData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    links: linkData,
    socialIcons: socialData,
    cartItems: 0,
    cart: [],
    cardSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    storeProducts: [],
    filteredProducts: [],
    featuredProducts: [],
    singleProduct: {},
    loading: true
  };

  handleSidebarToggle = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  handleCartToggle = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };

  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          openCart: this.openCart,
          closeCart: this.closeCart,
          handleCartToggle: this.handleCartToggle,
          handleSidebarToggle: this.handleSidebarToggle
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
