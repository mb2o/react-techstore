import React, { Fragment } from 'react';
import CartItem from './CartItem';
import { ProductConsumer } from '../../context';

export default function CartList() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <ProductConsumer>
            {({ cart, increment, decrement, removeItemFromCart }) => {
              if (cart.length === 0) {
                return (
                  <h3 className="text-title text-center text-main my-4">
                    your cart is currently empty
                  </h3>
                );
              }
              return (
                <Fragment>
                  {cart.map(item => (
                    <CartItem
                      key={item.id}
                      cartItem={item}
                      increment={increment}
                      decrement={decrement}
                      removeItemFromCart={removeItemFromCart}
                    />
                  ))}
                </Fragment>
              );
            }}
          </ProductConsumer>
        </div>
      </div>
    </div>
  );
}
