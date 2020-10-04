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
        this.state = {paypal: true}
        this.handleMethod = this.handleMethod.bind(this);        
    }    

    handleMethod(e) {
        var flag = true;
        if (e.target.value === "Paypal") {        
            flag = false;
        }
        this.setState({paypal: flag});
    }

    render(){

        return (
            <div className = "login" style = {{width:'60%', height:'100hv', display:'flex'}}>
                    <React.Fragment>
                        <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">                                
                                <Typography variant="h2">Confirmar Pago</Typography>
                                <form className="form" onSubmit={() => alert("Gracias por su compra")}>
                                    <FormControl fullWidth>
                                        <div style = {{fontSize: '20px'}}> Precio </div>                                    
                                        <TextField    
                                            fullWidth                                        
                                            disabled
                                            id="idTextPrecio"
                                            defaultValue={"$ " + this.props.price}
                                            variant="outlined"
                                            helperText="Precio total de la compra"
                                        />
                                    </FormControl>
                                        <br></br>                                
                                        <br></br>
                                    <FormControl fullWidth required>
                                        <div style = {{fontSize: '20px'}}> Método de Pago </div>
                                        <Select 
                                            variant="outlined" 
                                            defaultValue="" 
                                            id="grouped-select" 
                                            onChange = {this.handleMethod}
                                            >
                                            <ListSubheader>Físico</ListSubheader>
                                            <MenuItem value = "PagoCEntrega">Pago contra entrega</MenuItem>
                                            <MenuItem value = "EnTienda">En tienda </MenuItem>
                                            <ListSubheader>Virtual</ListSubheader>
                                            <MenuItem value = "Paypal">Paypal</MenuItem>
                                        </Select>
                                    </FormControl>  
                                    <br></br>
                                    <br></br>                                                                              
                                    <div hidden = {this.state.paypal}>
                                    <FormControl fullWidth>
                                        
                                            <div style = {{fontSize: '20px'}}> Moneda </div>
                                            <TextField
                                                required = {!this.state.paypal}                                        
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
                                    </FormControl>
                                    </div>                        
                                    
                                    <FormControl fullWidth>
                                        <div style = {{fontSize: '20px'}}> Intención </div>                                    
                                        <TextField
                                            disabled
                                            id="dTextItencion"
                                            defaultValue="Rebaja 7%"
                                            variant="outlined"
                                            style = {{width: '100%'}}
                                            helperText="Rebaja de la compra"
                                        />
                                    </FormControl>
                                        <br></br>                                
                                        <br></br>
                                    <FormControl fullWidth>
                                        <div style = {{fontSize: '20px'}}> Descripción </div>                                    
                                        <TextField
                                            id="dTextDescripcion"
                                            defaultValue=""
                                            variant="outlined"
                                            style = {{width: '100%'}}
                                            helperText="Rebaja de la compra"
                                        />
                                    </FormControl>
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
                                </form>
                            </Paper>
                        </main>
                    </React.Fragment>
            </div>
        );
    }

}

export default withRouter(PaymentForm);