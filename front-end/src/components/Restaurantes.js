import React, { Component } from "react";
import CustomCard from "./restaurantes/CustomCard.js";
import { Grid } from "@material-ui/core";
import { Jumbotron } from "react-bootstrap";

import appState from "../store/appState";
import CustomDialog from "./restaurantes/CustomDialog";

const clickVerCardapio = restaurante => {
  fetch(`https://challange.goomer.com.br/restaurants/${restaurante.id}/menu`)
    .then(res => res.json())
    .then(
      result => {
        let cardapio = {
          restaurante,
          itensCardapio: result
        };
        appState.altera_Cardapio(cardapio);
        console.log(cardapio.itensCardapio.length);
        appState.toggle_Dialog();
      },
      error => {
        console.log(error);
        this.setState({
          isLoaded: true,
          error
        });
      }
    );
};

class Restaurantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://challange.goomer.com.br/restaurants")
      .then(res => res.json())
      .then(
        result => {
          // console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        error => {
          console.log(error);
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  render() {
    const { ...s } = this.state;
    return (
      <Grid
        container
        direction='column'
        spacing={40}
        justify='center'
        alignItems='center'>
        <Grid item>
          <Jumbotron>
            <h2>Catálogo de Restaurantes!</h2>
            <p>
              Agora que nos conhecermos melhor, fique a vontade para escolher um
              de nossos restaurantes.
            </p>
          </Jumbotron>
        </Grid>
        <Grid item>
          <Grid container direction='row' spacing={16}>
            {!!s.items &&
              s.items.map((el, idx) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={idx} alignItems="center" justify="center">
                  <CustomCard
                    obj={el}
                    onClick={() => clickVerCardapio(el)}
                    height='150'
                  />
                </Grid>
              ))}
          </Grid>
        </Grid>
        <CustomDialog />
      </Grid>
    );
  }
}

export default Restaurantes;
