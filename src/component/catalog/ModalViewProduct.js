import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddIcon from '@material-ui/icons/Add';
import FilterListIcon from '@material-ui/icons/FilterList';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import { Fab } from "@material-ui/core";


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
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
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
              <h3>Hola Mundo!</h3>
            </div>
          
        </Modal>
      </div>
    );
  }

}

export default withStyles(useStyles, { withTheme: true })(ModalViewProduct);
