// import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import * as React from 'react';
import { NavLink } from 'react-router-dom';


function Menubar() {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <NavLink to="/home">Home</NavLink> |
            <NavLink to="/form">Form</NavLink> |
            <NavLink to="/about">About</NavLink> |
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  )
}

export default Menubar