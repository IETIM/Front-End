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

const useStyles = makeStyles({
    root: {
      maxWidth: 345
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
                 {props.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Precio: {props.descripcion}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Ver
            </Button>
            <Button size="small" color="primary"> Actualizar</Button>
          </CardActions>
        </Card>);
  }