import React, { useState } from "react";
import { Button, NavDropdown, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import "../../assets/css/offcanvas.css";

export const OffCanvas = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prevShow) => !prevShow);

  return (
    <>
      <Button className="menu-button" onClick={toggleShow}>
        <i className="bi bi-list"></i>
      </Button>

      <Offcanvas show={show} onHide={toggleShow}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Explora nuestro MarketPlace</Offcanvas.Title>
          <Button variant="light">
            <i className="bi bi-person"></i>
          </Button>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavDropdown title="Menu">
            <NavDropdown.Item as={NavLink} to="/home">
              Home
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/login">
              Iniciar Sesión
            </NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/register">
              Registrarse
            </NavDropdown.Item>
          </NavDropdown>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
