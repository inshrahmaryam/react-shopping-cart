import React from 'react';
import { useParams } from 'react-router-dom';
import { CartState } from './Context';

const Details = () => {
  const { id } = useParams(); // 🆔 Get ID from URL
  const { state } = CartState(); // Access global product list

  // Convert id to number if necessary
  const product = state.products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mt-4">
      <div className="card p-4">
        <img
          src={product.image}
          alt={product.title}
          style={{ height: '300px', objectFit: 'contain' }}
        />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h4>${product.price}</h4>
      </div>
    </div>
  );
};

export default Details;
