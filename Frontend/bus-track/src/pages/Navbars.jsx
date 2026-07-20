import React from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/Images/Bus-track-logo.svg'; 

const Navbars = () => {
  return (
    <Navbar sticky="top" data-bs-theme="dark" className="navbar-main py-0">
      <Container fluid className="px-4 d-flex align-items-center justify-content-between">
        
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center m-0">
          <img
            src={logo}
            alt="Bus Track Logo"
            height="45" 
            className="m-0"
          />
        </Navbar.Brand>

        <Nav className="d-flex flex-row align-items-center" style={{ gap: '2rem' }}>
          <Nav.Link as={Link} to="/" className="nav-link-custom px-0 position-relative">
            Home
            <div style={{ position: 'absolute', bottom: '-8px', left: 0, right: 0, height: '3px', backgroundColor: '#ef3b3a' }} />
          </Nav.Link>
          <Nav.Link as={Link} to="/routes" className="nav-link-secondary px-0">
            Routes
          </Nav.Link>
          <Nav.Link as={Link} to="/schedule" className="nav-link-secondary px-0">
            Schedule
          </Nav.Link>
          <Nav.Link as={Link} to="/track" className="nav-link-secondary px-0">
            Track
          </Nav.Link>
        </Nav>

        <div className="d-flex align-items-center" style={{ gap: '12px' }}>
          <Button 
            // as={Link}
            // to="/login"
            variant="outline-light" 
            className="px-4 py-2" 
            style={{ borderRadius: '6px', borderColor: '#444', color: '#ddd', fontSize: '0.9rem', fontWeight: '600' }}
          >
            Sign Up
          </Button>
          <Button 
            as={Link}
            to="/login"
            className="btn-custom-red px-4 py-2" 
            style={{ fontSize: '0.9rem' }}
          >
            Login
          </Button>
        </div>

      </Container>
    </Navbar>
  );
};

export default Navbars;