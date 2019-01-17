import React, { Component } from "react";
import { Image } from "react-bootstrap";

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
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
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
      <div>
        {!!s.items &&
          s.items.map((el) => (
            <div key={el.id} align="center">
              <Image src={el.image} responsive />
              <p>{el.name}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default Restaurantes;
