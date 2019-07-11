import React, { Fragment } from 'react';
import { ProductConsumer } from '../context';

export default function HomePage() {
  return (
    <Fragment>
      <ProductConsumer>{value => <h1>{value}</h1>}</ProductConsumer>
    </Fragment>
  );
}
