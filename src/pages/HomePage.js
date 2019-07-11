import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <Fragment>
      <Hero title="awesome gadgets" max="true">
        <Link to="/products">our products</Link>
      </Hero>
    </Fragment>
  );
}
