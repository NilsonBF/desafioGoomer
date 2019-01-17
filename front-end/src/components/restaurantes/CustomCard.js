import React, { Component } from "react";
import { Image, Col } from "react-bootstrap";
import "./CustomCard.css";

class CustomCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Col xs={12} md={8}>
        <div className="cardDiv">
          <Image src={this.props.obj.image} responsive className="cardImg" />
          <p>{this.props.obj.name}</p>
        </div>
      </Col>
    );
  }
}

export default CustomCard;
