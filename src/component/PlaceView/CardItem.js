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
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width:'94%',
    border:'1px solid black',
  },
  media: {
    height: 140,
  },
});
export default function CardItem(props){

    const [id,setId] = React.useState(null);
    const classes = useStyles();
    if (id != null){
      return <Redirect to="/catalog"> </Redirect>
    }
  
    return(  <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={logo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
                {props.descripcion}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>setId(0)}>
            Ver
          </Button>
        </CardActions>
      </Card>);
}