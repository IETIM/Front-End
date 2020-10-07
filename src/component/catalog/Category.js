import React from "react";
import { Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import { ListProduct } from "./ListProduct";

export class Category extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a name={this.props.name} id={this.props.name}>
        <Grid container spacing={1}>
          <Typography gutterBottom variant="h5" noWrap>
            {this.props.name.toUpperCase()}
          </Typography>

          <Grid
            container
            spacing={1}
            direction="row"
            justify="center"
            alignItems="baseline"
          >
            {this.props.products}
          </Grid>
        </Grid>
      </a>
    );
  }
}
