import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "/img/logo3.jpeg";
import "../../assets/css/header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <NavLink to="/">
          <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <h1 className="title">MANOS DE AMÉRICA</h1>
      </div>
      <div className="search-bar">
        <NavDropdown>
          <NavDropdown.Item as={NavLink} to="/">
            Tipo
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/">
            Categoría
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Ordenar por" className="order-by">
          <NavDropdown.Item active as={NavLink} to="/">
            Precio
          </NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/">
            Más reciente
          </NavDropdown.Item>
        </NavDropdown>
        <input className="search-input" type="text" placeholder="Búsqueda" />
        <Button variant="light" className="search-button">
          <i className="bi bi-search"></i>
        </Button>
      </div>
      <div className="buttons-container">
        <NavLink to="/login" className="button-login">
          <Button className="button-login">
            <ion-icon name="person-outline"></ion-icon>
          </Button>
        </NavLink>
        <NavLink to="/register" className="button-register">
          <Button className="button-register">
            <ion-icon name="person-add-outline"></ion-icon>
          </Button>
        </NavLink>
      </div>
    </header>
  );
};
