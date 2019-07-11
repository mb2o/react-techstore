import React from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../context';
import Product from '../Product';
import Title from '../Title';

export default function Featured() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="featured products" center />
        <div className="row">
          <ProductConsumer>
            {({ featuredProducts }) => {
              return featuredProducts.map(product => (
                <Product key={product.id} product={product} />
              ));
            }}
          </ProductConsumer>
        </div>
      </div>
    </section>
  );
}
