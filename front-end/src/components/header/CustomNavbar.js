import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import CustomUsername from "./CustomUsername";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Desafio Goomer</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <CustomUsername />
      </Navbar>
    );
  }
}

export default CustomNavbar;
