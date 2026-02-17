import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4 py-3">
      <Container fluid>
        
        <Navbar.Brand as={Link} to="/">
          <span
            className="fw-bold text-warning"
            style={{ fontSize: "1.6rem", fontStyle: "italic" }}
          >
            Mickey's
          </span>{" "}
          <span className="fw-light text-white">
            Magic Brew
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNav" />

        <Navbar.Collapse id="navbarNav" className="justify-content-center">
          <Nav className="gap-4">
            <Nav.Link as={Link} to="/">
              Inicio del Reino
            </Nav.Link>

            <Nav.Link as={Link} to="/category/cafes">
              Elixires
            </Nav.Link>

            <Nav.Link as={Link} to="/category/pasteleria">
              Pastelería Encantada
            </Nav.Link>

            <Nav.Link as={Link} to="/category/merch">
              Mercancía Mágica
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Carrito */}
        <CartWidget />

      </Container>
    </Navbar>
  )
}

export default NavBar




