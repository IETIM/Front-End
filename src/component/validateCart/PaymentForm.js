import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';

export class PaymentForm extends React.Component{

    constructor(props) {
        super(props);          
    }    

    render(){

        return (
            <div className = "login" style = {{width:'60%', height:'100hv', display:'flex'}}>
                    <React.Fragment>
                        <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">                                
                                <Typography variant="h2">Confirmar Pago</Typography>
                                <div className="form">
                                    
                                        <div style = {{width: '50%', fontSize: '20px'}}> Precio </div>                                    
                                        <TextField
                                            disabled
                                            id="outlined-disabled"
                                            defaultValue="$ 5.000"
                                            variant="outlined"
                                            style = {{width: '100%'}}
                                            helperText="Precio total de la compra"
                                        />
                                        <br></br>                                
                                        <br></br>
                                        <div style = {{width: '50%', fontSize: '20px'}}> Método de Pago </div>
                                        <Select required variant="outlined" defaultValue="" id="grouped-select" style = {{width: '100%'}}>
                                            <ListSubheader>Físico</ListSubheader>
                                            <MenuItem>Pago contra entrega</MenuItem>
                                            <MenuItem>En tienda </MenuItem>
                                            <ListSubheader>Virtual</ListSubheader>
                                            <MenuItem>Paypal</MenuItem>
                                        </Select>
                                        
                                        <br></br>
                                        <br></br>
                                        <div style = {{width: '50%', fontSize: '20px'}}> Moneda </div>
                                        <TextField
                                            id="idTipoMoneda"
                                            select
                                            variant="outlined"                                            
                                            style = {{width: '100%'}}
                                        > 
                                            <MenuItem value="USD"> (USD) Dólar Estadounidense </MenuItem>
                                            <MenuItem value="EUR"> (EUR) Euro </MenuItem>
                                            <MenuItem value="JPY"> (JPY) Yen </MenuItem>
                                            <MenuItem value="GBP"> (GBP) Libra esterlina </MenuItem>
                                            <MenuItem value="COP"> (COP) Peso Colombiano </MenuItem>
                                        </TextField> 
                                        

                                    <br></br>
                                    <br></br>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                    >
                                        Confirmar Compra
                                    </Button>
                                </div>
                            </Paper>
                        </main>
                    </React.Fragment>
            </div>
        );
    }

}

export default withRouter(PaymentForm);