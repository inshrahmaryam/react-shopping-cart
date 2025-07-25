// src/context/Context.jsx
import React, { createContext, useContext, useReducer } from 'react';

export const Cart = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

       case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload.id),
      };
      
    case "SET_PRODUCTS":
      return { ...state, products: action.payload };

    default:
      return state;
  }
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    cart: [],
    products: [],
  });

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default ContextProvider;

export const CartState = () => useContext(Cart);
