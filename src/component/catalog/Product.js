import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './../../logo.svg';
import ModalViewProduct from './ModalViewProduct';

const useStyles = makeStyles({
    root: {
        width: "250px",
        margin: "auto",
      borderBottom:'1px solid black',
      borderRight:'1px solid black',
      padding:"15px"
    },
    media: {
      height: 140,
    },
  });
  export default function Product(props){
      const classes = useStyles();
      return(  <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={logo}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                 {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Precio: {props.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Categoria: {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <ModalViewProduct componente={this}></ModalViewProduct>
            <Button size="small" color="primary"> Añadir al carro</Button>
          </CardActions>
        </Card>);
  }