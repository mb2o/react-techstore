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
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,

    storeProducts: [],
    featuredProducts: [],
    filteredProducts: [],
    singleProduct: {},

    loading: true,

    search: '',
    price: 0,
    min: 0,
    max: 0,
    company: 'all',
    shipping: false
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

    let maxPrice = Math.max(...storeProducts.map(item => item.price));

    this.setState(
      {
        storeProducts,
        featuredProducts,
        filteredProducts: storeProducts,

        cart: this.getCartFromStorage(),
        singleProduct: this.getProductFromStorage(),

        loading: false,

        price: maxPrice,
        max: maxPrice
      },
      () => {
        this.addTotals();
      }
    );
  };

  getCartFromStorage = () => {
    let cart;

    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart'));
    } else {
      cart = [];
    }

    return cart;
  };

  getProductFromStorage = () => {
    return localStorage.getItem('singleProduct')
      ? JSON.parse(localStorage.getItem('singleProduct'))
      : {};
  };

  syncStorage = () => {
    localStorage.setItem('cart', JSON.stringify(this.state.cart));
  };

  getTotals = () => {
    let subTotal = 0;
    let cartItems = 0;

    this.state.cart.forEach(item => {
      subTotal += item.total;
      cartItems += item.count;
    });

    subTotal = parseFloat(subTotal.toFixed(2));

    let tax = subTotal * 0.21;
    tax = parseFloat(tax.toFixed(2));

    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));

    return {
      cartItems,
      subTotal,
      tax,
      total
    };
  };

  addTotals = () => {
    const { cartItems, subTotal, tax, total } = this.getTotals();

    this.setState({
      cartItems,
      cartSubTotal: subTotal,
      cartTax: tax,
      cartTotal: total
    });
  };

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
    let product = this.state.storeProducts.find(item => item.id === id);

    localStorage.setItem('singleProduct', JSON.stringify(product));

    this.setState({
      singleProduct: { ...product },
      loading: false
    });
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

  increment = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);

    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  decrement = id => {
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);

    cartItem.count = cartItem.count - 1;

    if (cartItem.count === 0) {
      this.removeItemFromCart(id);
    } else {
      cartItem.total = cartItem.count * cartItem.price;
      cartItem.total = parseFloat(cartItem.total.toFixed(2));

      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
          this.syncStorage();
        }
      );
    }
  };

  removeItemFromCart = id => {
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);

    this.setState(
      () => {
        return {
          cart: [...tempCart]
        };
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  clearCart = () => {
    this.setState(
      {
        cart: []
      },
      () => {
        this.addTotals();
        this.syncStorage();
      }
    );
  };

  handleChange = event => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      this.sortData
    );
  };

  sortData = () => {
    console.log('sorting data');
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
          setSingleProduct: this.setSingleProduct,
          increment: this.increment,
          decrement: this.decrement,
          removeItemFromCart: this.removeItemFromCart,
          clearCart: this.clearCart,
          handleChange: this.handleChange
        }}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
