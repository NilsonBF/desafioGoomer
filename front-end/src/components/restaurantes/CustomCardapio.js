import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import * as MT from "@material-ui/core";

import { observer } from "mobx-react";
import appState from "../../store/appState";

const validaImg = p => {
  return !!p
    ? p
    : `https://cdn.dribbble.com/users/1012566/screenshots/4187820/topic-2.jpg`;
};

const validaPreco = p => {
  let valor = String(p).split(".");
  let rtn = "";
  console.log(valor);
  if (valor[1]) {
    if (valor[1].length === 1) {
      rtn = "0";
    } else {
      rtn = "";
    }
  } else {
    rtn = ",00";
  }
  return rtn;
};

const styles = {
  img: {
    minHeight: 303,
    maxHeight: 303,
    minWidth: 545,
    maxWidth: 545
  },
  font: {
    fontWeight: "bold",
    color: "black",
    textShadow: "2px 2px 40px #FFF"
  }
};

const CustomCardapio = observer(
  class CustomCardapio extends Component {
    constructor(props, context) {
      super(props, context);
      this.state = {
        index: 0,
        direction: null
      };
    }

    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction
      });
    }

    render() {
      let { ...s } = this.state;
      return (
        <Carousel
          activeIndex={s.index}
          direction={s.direction}
          onSelect={(e, d) => this.handleSelect(e, d)}>
          {appState.cardapio.itensCardapio.length > 0 &&
            appState.cardapio.itensCardapio.map((el, idx) => (
              <Carousel.Item key={idx}>
                <img
                  style={styles.img}
                  alt={el.name}
                  src={validaImg(el.image)}
                />
                <Carousel.Caption>
                  <h3 style={styles.font}>{el.name}</h3>
                  <h4 style={styles.font}>
                    {`R$ ${String(el.price).replace(".", ",") +
                      validaPreco(el.price)}`}
                  </h4>
                  <h4 style={styles.font}>{el.group}</h4>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
        </Carousel>
      );
    }
  }
);

export default CustomCardapio;

/**
 * <Carousel.Item>
 <img width={900} height={500} alt="900x500" src="/carousel.png" />
 <Carousel.Caption>
 <h3>First slide label</h3>
 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
 </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={900} height={500} alt="900x500" src="/carousel.png" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
 */
