import React, { Fragment } from 'react';
import { ProductConsumer } from '../context';

export default function HomePage() {
  return (
    <Fragment>
      <ProductConsumer>
        {value => {
          return <h1>Hello from Home Page</h1>;
        }}
      </ProductConsumer>
    </Fragment>
  );
}
