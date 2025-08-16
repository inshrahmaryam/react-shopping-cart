import React from "react";
import { CartState } from "./Context";

const Cart = () => {
  const {
    state: { cart },
  } = CartState();

  return (
    <div className="container mt-4">
      <h2>🛒 Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="card mb-3 p-3 d-flex flex-row align-items-center"
            style={{ width: "100%", flexWrap: "wrap" }}
          >
            <img
              src={item.image}
              alt={item.title}
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
                marginRight: "15px",
                marginBottom: "10px", // for small screens
              }}
            />

            <div style={{ flex: "1 1 auto", minWidth: 0 }}>
              <h5
                className="cart-title"
                style={{
                  whiteSpace: "normal",       // wrap text
                  wordWrap: "break-word",
                  overflowWrap: "anywhere",
                  marginBottom: "5px",
                }}
              >
                {item.title}
              </h5>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <p className="mb-0">💲{item.price}</p>
                <small>Qty: {item.qty || 1}</small>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
