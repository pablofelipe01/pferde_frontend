import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect variant="light" expand="md">
      <Navbar.Brand as={Link} to="/home">
        European Horses
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          {/* <Nav.Link as={Link} to="/home">
            HOME
          </Nav.Link> */}
          <Nav.Link as={Link} to="/pferde">
            STUD BOOK
          </Nav.Link>
        
          <Nav.Link as={Link} to="/register">
            REGISTER
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            AUCTION 
          </Nav.Link>



          {/* <Nav.Link as={Link} to="/SALE">
            SALE
          </Nav.Link> */}




        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;