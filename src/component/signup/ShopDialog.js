import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from '@material-ui/pickers'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide(props) {

  return (
    <div>
      <Dialog
        open={props.open}
        maxWidth = 'sm'
        TransitionComponent={Transition}
        keepMounted
        onClose={()=> props.handleOpen()}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{"Registre los datos de su tienda"}</DialogTitle>
        <DialogContent>
                <form onSubmit={props.handleSubmit} className="todo-form" style = {{alignItems : 'center'}}>
                 
                    <label htmlFor="text"  className="right-margin">
                        Nombre:
                    </label>

                    <TextField 
                        id="text"
                        onChange={props.handleNameChange}
                        value={props.state.shopname}>
                    </TextField>

                    <br/>
                    <br/>
                    <label htmlFor="status" className="right-margin">
                        Tipo de tienda:
                    </label>

                    <Select
                      autoFocus
                      value={props.state.type}
                      onChange = {props.handleTypeChange}
                      inputProps={{
                        name: 'Status',
                        id: 'max-width',
                      }}
                    >
                        <MenuItem value="drogueria">drogueria</MenuItem>
                        <MenuItem value="supermercado">supermercado</MenuItem>
                        <MenuItem value="restaurante">restaurante</MenuItem>
                        <MenuItem value="variedades">variedades</MenuItem>
                        <MenuItem value="panadería">panadería</MenuItem>
                        <MenuItem value="miscelanea">miscelanea</MenuItem>
                        <MenuItem value="ferretería">ferretería</MenuItem>
                    </Select>
                    <br/>
                    <br/>
                  
                    
                    <label htmlFor="responsible" className="right-margin">
                        Dirección:
                    </label>

                    <TextField
                        id= "responsible"
                        onChange={props.handleLocationChange}
                        value={props.state.location}>
                    </TextField>
  
                    <br/>
                </form>
                <br/>
                <br/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> props.handleOpen()} color="primary">
            Cancel
          </Button>
          <Button onClick={()=> props.handleSubmit()} color="primary">
            Agregar 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}