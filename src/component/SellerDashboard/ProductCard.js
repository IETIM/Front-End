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
              alt="Nombre del producto"
              image={logo}
              title="Nombre del producto"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                 {props.nombre}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Precio: {"$ "+props.precio}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Existencias: {props.existencias}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <ModalViewProduct imagen={logo} nombre={props.nombre} precio={props.precio} descripcion={props.descripcion}></ModalViewProduct>
            <Button size="small" color="primary" onClick={()=>{props.handleUpdateProductModal(props.index)}}> Actualizar</Button>
          </CardActions>
        </Card>);
  }