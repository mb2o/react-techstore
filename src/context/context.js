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
    featuredProducts: [],
    filteredProducts: [],
    singleProduct: {},
    loading: true
  };

  componentDidMount() {
    this.setProducts(items);
  }

  setProducts = products => {
    let storeProducts = products.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const product = { id, ...item.fields, image };
      return product;
    });

    let featuredProducts = storeProducts.filter(item => item.featured);

    this.setState({
      storeProducts,
      featuredProducts,
      filteredProducts: storeProducts,
      cart: this.getCartFromStorage(),
      singleProduct: this.getProductFromStorage(),
      loading: false
    });
  };

  getCartFromStorage = () => {
    return [];
  };
  getProductFromStorage = () => {
    return [];
  };
  syncStorage = () => {};

  getTotals = () => {};
  addTotals = () => {};

  addToCart = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id);

    if (!tempItem) {
      tempItem = tempProducts.find(item => item.id === id);
      let total = tempItem.price;
      let cartItem = { ...tempItem, count: 1, total };
      tempCart = [...tempCart, cartItem];
    } else {
      tempItem.count++;
      tempItem.total = tempItem.price * tempItem.count;
      tempItem.total = parseFloat(tempItem.total.toFixed(2));
    }

    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
        this.syncStorage();
        this.openCart();
      }
    );
  };

  setSingleProduct = id => {
    console.log(id);
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
          handleSidebarToggle: this.handleSidebarToggle,
          addToCart: this.addToCart,
          setSingleProduct: this.setSingleProduct
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
