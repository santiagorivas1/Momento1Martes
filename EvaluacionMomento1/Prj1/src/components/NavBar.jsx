import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react'

function NavBar() {
  return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">CLA</Navbar.Brand>
          <Nav className="me-auto">
            <div className='div-navBar'>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#computer">Computer</Nav.Link>
            <Nav.Link href="#Laptop">Laptop</Nav.Link>
            <Nav.Link href="#Products">Products</Nav.Link>
            <Nav.Link href="#contact-us">ContactUs</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar