import React, { Component } from "react";

import CustomCard from "../restaurantes/CustomCard.js";
import * as Boots from "react-bootstrap";
import { Grid } from "@material-ui/core";

class Restaurantes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [
        // {
        //   id: 1,
        //   name: "Cupcake para todos",
        //   address: "Rua dos Sonhos, 310",
        //   image:
        //     "https://images.unsplash.com/photo-1525640788966-69bdb028aa73?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d53c30ba55d9ca863d57fabfffdb416b&auto=format&fit=crop&w=1047&q=80"
        // }
      ]
    };
  }

  componentDidMount() {
    fetch("https://challange.goomer.com.br/restaurants")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
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
      
      <Boots.Grid>
        <Grid container spacing={24}>
          {!!s.items &&
            s.items.map((el, idx) => <CustomCard key={idx} obj={el} />)}
        </Grid>
      </Boots.Grid>
    );
  }
}

export default Restaurantes;
