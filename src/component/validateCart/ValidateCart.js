import React from 'react';
import AppBar from "../appbar/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import paella from './static/paella.jpg';

const useStylesAlt = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }  
}));



function NestedGrid() {
    const classes2 = useStylesAlt();

    function RecipeReviewCard() {
      const classes = useStyles();
      
    
      return (
        <Grid item xs={3}>
        <Card className={classes.root}>
          <CardHeader                
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image={paella}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              This impressive paella is a perfect party dish and a fun meal to cook together with your
              guests. Add 1 cup of frozen peas along with the mussels, if you like.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>        
          </CardActions>      
        </Card>
        </Grid>
      );
    }
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={2}>
            <Paper className={classes2.paper}>item</Paper>
          </Grid>

        </React.Fragment>
      );
    }
  
    return (
      <div className={classes2.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow/>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <RecipeReviewCard/>
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <RecipeReviewCard/>
          </Grid>
        </Grid>
      </div>
    );
}

export default class ValidateCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productsCart: [{name:"Limón",price:"2.000",description:"_"},
                                    {name:"Pasta",price:"2.000",description:"_"},
                                    {name:"Arroz",price:"2.000",description:"_"},
                                    {name:"Salchicha",price:"2.000",description:"_"},
                                    {name:"Platano",price:"2.000",description:"_"},
                                    {name:"Papa",price:"2.000",description:"_"},
                                    {name:"Huevos",price:"2.000",description:"_"},
                                    {name:"Chicharron",price:"2.000",description:"_"},
                                    {name:"Cafe",price:"2.000",description:"_"},
                                    {name:"Lentejas",price:"2.000",description:"_"}]};        
    }

    render() {    
        
        return (
            <div>
                <AppBar/>                
                <div style = {{height: '80px', width: '100%'}}></div>
                <div>
                    <header>
                        <h1> Validar Productos </h1>
                    </header>
                </div>
                <NestedGrid></NestedGrid>
                <br></br><br></br><br></br>
                <Button variant="contained" color="primary" style = {{height: '40px', borderRadius: '4px', position: 'inline-block'}}>
                    Validar Carrito
                </Button>             
            </div>
        );
    }
}



