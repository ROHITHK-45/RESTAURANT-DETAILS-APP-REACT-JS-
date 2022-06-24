import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">RESTAURANTS</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link to>
            <Nav.Link href="#features">Features</Nav.Link>
          </Link>
          <Link to="/">
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
