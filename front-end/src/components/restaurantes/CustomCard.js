import React, { Component } from "react";
import { observer } from "mobx-react";

import {
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia
} from "@material-ui/core";
import { Button, Glyphicon } from "react-bootstrap";

const CustomCard = observer(
  class CustomCard extends Component {
    render() {
      return (
        <Grid item xs={12} sm={4} md={3}>
          <Card style={{minWidth:260}}>
            <CardMedia
              component="img"
              alt={this.props.obj.name}
              height={this.props.height}
              image={this.props.obj.image}
              title={this.props.obj.name}
            />
            <CardContent>
              <h4>{this.props.obj.name}</h4>
              <h5>{this.props.obj.address}</h5>
            </CardContent>
            <CardActions>
              <Button block bsStyle="link" onClick={this.props.onClick}>
                <Glyphicon glyph="cutlery" />
                &nbsp;Ver Cardápio
              </Button>
            </CardActions>
          </Card>
        </Grid>
      );
    }
  }
);

export default CustomCard;
