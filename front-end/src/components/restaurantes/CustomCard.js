import React, { Component } from "react";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { Typography, Grid } from "@material-ui/core";

import * as Icones from "@material-ui/icons";

class CustomCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={4} md={3}>
        <Card>
            <CardMedia
              component='img'
              alt={this.props.obj.name}
              height='150'
              image={this.props.obj.image}
              title={this.props.obj.name}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                {this.props.obj.name}
              </Typography>
            </CardContent>
          <CardActions >
            <Button color='primary' size="large">
              <Icones.RestaurantMenuTwoTone />
              &nbsp;Ver Cardápio
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default CustomCard;
