import React from 'react';
import { ProductConsumer } from '../../context';
import PaypalBtn from './PaypalBtn';

export default function CartTotals({ history }) {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {({ cartSubTotal, cartTax, cartTotal, clearCart }) => {
            return (
              <div className="col text-title text-center my-4">
                <button
                  className="btn btn-outline-danger text-capitalize my-4"
                  onClick={clearCart}>
                  clear cart
                </button>
                <h3 className="">subtotal : ${cartSubTotal}</h3>
                <h3 className="">tax : ${cartTax}</h3>
                <h3 className="">total : ${cartTotal}</h3>
                <PaypalBtn
                  history={history}
                  cartTotal={cartTotal}
                  clearCart={clearCart}
                />
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
}
