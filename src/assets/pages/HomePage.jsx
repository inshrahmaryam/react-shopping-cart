import React, {useState} from 'react';
import { Navbar, Container, Form, FormControl, Button, Dropdown, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 import { FaShoppingCart } from "react-icons/fa";
 import {Link} from "react-router-dom";
import Home from './Home';

const HomePage = () => {
   const [searchQuery, setSearchQuery] = useState('');
  return (<>
        <Navbar bg="light" expand="lg" className="px-4" fixed="top">
<Container fluid className="d-flex justify-content-between align-items-center">
        <Link to="/">Shopping Cart</Link>
  {/* <a className="navbar-brand" href="/">Products</a> */}
  <form className="d-flex ms-auto" onSubmit={(e) => e.preventDefault()}>
    <input
      type="text"
      className="form-control me-2"
      placeholder="Search products..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
    {/* <button className="btn btn-outline-primary" type="submit">
      Search
    </button> */}
  </form>
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
       <FaShoppingCart color="white" fontSize="25px" />
       Cart
        <Badge bg="dark">{10}</Badge>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{minWidth:370}}>
       <span style={{padding:10}}>Cart is Empty!</span>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
</Navbar>
 <div style={{ paddingTop: '80px', textAlign: 'center' }}></div>
</>
  );
};

export default HomePage;
