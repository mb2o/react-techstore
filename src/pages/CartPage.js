import React, { Fragment } from 'react';
import CartSection from '../components/CartPage/Cart';
import Hero from '../components/Hero';
import cartBcg from '../images/storeBcg.jpeg';

export default function CartPage() {
  return (
    <Fragment>
      <Hero img={cartBcg} />
      <CartSection />
    </Fragment>
  );
}
