import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { CartState } from './Context';
import { Navbar, Container, Form, Badge, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ✅ FIXED: missing import
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart } from 'react-icons/fa';

const Home = () => {
  const { state, dispatch } = CartState();
  const [searchQuery, setSearchQuery] = useState('');
  const navigate= useNavigate();
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      dispatch({ type: 'SET_PRODUCTS', payload: data }); // Save in global state
      console.log(data);
    };

    fetchProducts();
  }, []);

  // ✅ Filter products by search query
  const filteredProducts = state.products?.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <>
      <Navbar bg="light" expand="lg" className="px-4" fixed="top">
        <Container fluid className="d-flex justify-content-between align-items-center">
          <Link to="/" className="navbar-brand">Shopping Cart</Link>

          <form className="d-flex ms-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>

          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              <FaShoppingCart color="white" fontSize="25px" />
              <Badge bg="secondary" className="ms-2">
                {state.cart?.length || 0}
              </Badge>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ minWidth: 370 }}>
              {state.cart?.length === 0 ? (
                <span style={{ padding: 10 }}>Cart is Empty!</span>
              ) : (
                state.cart.map((item) => (
                  <div key={item.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                    {item.title}
                  </div>
                ))
              )}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Navbar>

      <div className="container mt-5">
        <h2 className="mb-4 text-center">Products</h2>
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-4 mb-3" key={product.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={product.image}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: '250px', objectFit: 'contain' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">${product.price}</p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() =>
                      dispatch({ type: 'ADD_TO_CART', payload: product })
                    }
                  >
                    Add to Cart
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FROM_CART', payload: product })
                    }
                  >
                    Remove
                  </button>
                  <button
            className="btn btn-info mt-2"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details
          </button>
                </div>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <p className="text-center text-muted">No products found.</p>
          )}
        </div>
      </div>
          
    </>
  );
};

export default Home;
