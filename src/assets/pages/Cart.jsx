import React from 'react';
import { CartState } from './Context';

const Cart = () => {
  const { state } = CartState();

  return (
    <div className="container mt-4">
      <h2>Cart</h2>
      {state.cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        state.cart.map((item) => (
          <div key={item.id} className="card mb-3 p-3">
        <h5 className="cart-title">{item.title}</h5>
            <p>${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
