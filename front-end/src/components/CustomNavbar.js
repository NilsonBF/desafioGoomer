import React, { Component } from "react";
import { Navbar, NavItem, NavDropdown, Nav, MenuItem } from "react-bootstrap";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">Desafio Goomer</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Restaurantes
            </NavItem>
            <NavDropdown eventKey={3} title="Usuários" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Listar Usuários</MenuItem>
              <MenuItem eventKey={3.2}>Adicionar Usuário</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Excluir Usuários</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={3} title="Grupos" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Listar Grupos</MenuItem>
              <MenuItem eventKey={3.2}>Adicionar Grupos</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Excluir Grupos</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default CustomNavbar;
