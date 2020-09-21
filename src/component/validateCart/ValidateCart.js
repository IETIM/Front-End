import React from 'react';
import AppBar from "../appbar/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

function NestedGrid() {
    const classes = useStyles();
  
    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper}>item</Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
    );
}

export default class ValidateCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productsCart: []};        
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



