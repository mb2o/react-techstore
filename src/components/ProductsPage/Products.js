import React from 'react';
import { ProductConsumer } from '../../context';
import ProductsFilter from './ProductsFilter';
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

              <ProductsFilter />

              <div className="row">
                <div className="col-10 mx-auto">
                  <h6 className="text-title">
                    total products : {filteredProducts.length}
                  </h6>
                </div>
              </div>

              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-title text-center">
                    sorry, no item matched your search criteria
                  </div>
                ) : (
                  filteredProducts.map(item => (
                    <Product key={item.id} product={item} />
                  ))
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
}
