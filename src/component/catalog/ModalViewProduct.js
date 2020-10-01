import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import { Fab } from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './../../logo.svg';



function getModalStyle() {
    const top = 50 ;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  
}

const useStyles = (theme) => ({
  paper: {
    position: "fixed",
  },
  media: {
    height: 300,
  },
  root: {
    width:"600px",
    margin: "auto",
  borderBottom:'1px solid black',
  borderRight:'1px solid black',
  padding:"15px"
},
});

class ModalViewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state={open:false}
    this.handleClose= this.handleClose.bind(this);
    this.handleOpen= this.handleOpen.bind(this);
  }
  handleOpen = () => {
    this.setState({open:true});
  };

  handleClose = () => {
      this.setState({open:false});
  };
  render() {
    const { classes } = this.props;  

    return (      
      <div>
        
        <Button color="primary" onClick={this.handleOpen}>
        Ver
        </Button>
        <Modal
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          
    <div style={getModalStyle()} className={classes.paper}>    
        <Card className={classes.root}>
            <CardActionArea>
            <CardMedia
              className={classes.media}
              image={this.props.imagen}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                 {this.props.nombre}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Precio: {this.props.precio}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                  Descripción: {this.props.descripcion}
              </Typography>
              <center><Button onClick={()=>this.handleClose()}>Cerrar</Button></center>
            </CardContent>
            </CardActionArea>
         
        </Card>
            </div>
        </Modal>
      </div>
    );
  }

}

export default withStyles(useStyles, { withTheme: true })(ModalViewProduct);
