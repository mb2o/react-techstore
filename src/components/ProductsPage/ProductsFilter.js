import React from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../context';

export default function ProductsFilter() {
  return (
    <ProductConsumer>
      {({
        search,
        price,
        min,
        max,
        company,
        shipping,
        storeProducts,
        handleChange
      }) => {
        return (
          <div className="row my-5">
            <div className="col-10 max-auto">
              <FilterWrapper>
                <div className="">
                  <label htmlFor="search">search</label>
                  <input
                    name="search"
                    id="search"
                    value={search}
                    onChange={handleChange}
                    className="filter-item"
                  />
                </div>

                <div className="">
                  <label htmlFor="company">company</label>
                  <select
                    name="company"
                    id="company"
                    className="filter-item"
                    value={company}
                    onChange={handleChange}>
                    <option value="all">all</option>
                    <option value="fuji">fuji</option>
                    <option value="htc">htc</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="price">
                    <p className="mb-2">
                      product price : <span>$ {price}</span>
                    </p>
                  </label>
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="filter-price"
                    min={min}
                    max={max}
                    value={price}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label htmlFor="shipping" className="mx-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    value={shipping && true}
                    onChange={handleChange}
                  />
                </div>
              </FilterWrapper>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

const FilterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;

  label {
    font-weight: bold;
    text-transform: capitalize;
  }

  .filter-item,
  .filter-price {
    display: block;
    width: 100%;
    background: transparent;
    border-radius: 0.5rem;
    border: 2px solid var(--darkGrey);
  }
`;
