import React from 'react';
import { ProductConsumer } from '../../context';
import Product from '../Product';
import Title from '../Title';

export default function Products() {
  return (
    <ProductConsumer>
      {({ filteredProducts }) => {
        return (
          <section className="py-5">
            <div className="container">
              <Title center title="our products" />
              <div className="row py-5">
                {filteredProducts.map(item => (
                  <Product key={item.id} product={item} />
                ))}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
