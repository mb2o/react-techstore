import React, { Component } from 'react';
import { linkData } from './linkData';

const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 2,
    links: linkData,
    cart: []
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
