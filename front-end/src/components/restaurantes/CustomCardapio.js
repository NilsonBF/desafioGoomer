import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

import { observer } from "mobx-react";
import appState from "../../store/appState";


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
      alert(`selected=${selectedIndex}, direction=${e.direction}`);
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
          onSelect={(e,d) => this.handleSelect(e,d)}
        >
          {appState.cardapio.itensCardapio.length > 0 &&
            appState.cardapio.itensCardapio.map((el, idx) => (
              <Carousel.Item key={idx}>
                <img width={900} height={500} alt="900x500" src={el.image} />
                <Carousel.Caption>
                  <h3>{el.name}</h3>
                  <p>R$: {String(el.price).replace(".", ",")}</p>
                  <p>{el.group}</p>
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
