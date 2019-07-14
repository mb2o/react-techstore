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
        // get unique companies
        let companies = new Set();
        companies.add('all');
        for (let product in storeProducts) {
          companies.add(storeProducts[product]['company']);
        }
        companies = [...companies];

        return (
          <div className="row my-5">
            <div className="col-10 mx-auto">
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
                    {companies.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
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
                  <label htmlFor="shipping" className="mr-2">
                    free shipping
                  </label>
                  <input
                    type="checkbox"
                    name="shipping"
                    id="shipping"
                    checked={shipping && true}
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
