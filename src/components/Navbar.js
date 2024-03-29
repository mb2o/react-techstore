import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import { ProductConsumer } from '../context';
import logo from '../images/logo.svg';
import styled from 'styled-components';

export default function Navbar() {
  return (
    <ProductConsumer>
      {({ handleSidebarToggle, handleCartToggle, cartItems }) => {
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebarToggle} />
              <img src={logo} alt="logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCartToggle} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);
  z-index: 1;

  .nav-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1170px;
    margin: 0 auto;
  }
  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
  .cart-items {
    background: var(--primaryColor);
    color: var(--mainWhite);
    font-size: 0.8rem;
    position: absolute;
    top: -8px;
    right: -8px;
    border-radius: 50%;
    padding: 0 5px;
  }
`;
