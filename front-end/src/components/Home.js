import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <h1>Olá!</h1>
        <p>Bem vindo ao nosso catálogo de restaurantes.</p>
        <p>Para nos conhecermos melhor digite seu nome na barra acima.</p>
      </Jumbotron>
    );
  }
}

export default Home;
