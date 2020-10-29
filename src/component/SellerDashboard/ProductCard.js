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
import ModalViewProduct from '../catalog/ModalViewProduct';

const useStyles = makeStyles({
    root: {
      maxWidth: 180
    },
    media: {
      height: 100,
    },
  });
  export default function ProductCard(props){
      const classes = useStyles();

      
      return(  <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              alt={props.name}
              image={props.image||logo}
              title={props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                 {props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Precio: {"$ "+props.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Existencias: {props.stocks}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <ModalViewProduct imagen={logo} nombre={props.name} precio={props.price} descripcion={props.description}></ModalViewProduct>
            <Button size="small" color="primary" onClick={()=>{props.handleUpdateProductModal(props.index)}}> Actualizar</Button>
          </CardActions>
        </Card>);
  }