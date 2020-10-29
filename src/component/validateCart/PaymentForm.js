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
import Divider from '@material-ui/core/Divider';
import PurchaseForm from './PurchaseForm';

export class PaymentForm extends React.Component{

    constructor(props) {
        super(props);
        var order = 
        [{
            shop: "mitiendita",
            method: "Paypal",
            purchases: [{productId:"5f7e735312de4a10fbce30c5", quantity:2}],
            description: "Lolazos :D",
            currency: "USD",
            user: "marcelo@marcelo.com"
        }]
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

    loadJson = () => {
        var orders = [];
        for (var i = 0; i < this.state.products.length; i++) {
          let currentShop = this.state.products.shop;
          let currentOrder = this.state.products.order;          
          var order = {
            shop: currentShop,
            purchases: currentOrder,
          };          
          orders.push(order);
        }
    }
    
    render(){
        console.log("------------------------- PAYMENT FORM -------------------------")
        console.log(this.props)
        console.log("------------------------- PAYMENT FORM -------------------------")
        return (
            <>
            <div  hidden = {this.props.price == "0" ? false: true}>
                <div style = {{fontSize: '50px', paddingLeft: "50px"}}>
                    Tu lista de productos está vacía, añade al carrito para poder comprar los productos!
                </div>
            </div>
            <div hidden = {this.props.price == "0" ? true: false}>                
                <div className = "login" style = {{width:'60%', height:'100hv', display:'flex'}}>
                        <React.Fragment>
                            <CssBaseline />
                            <main className="layout">
                                <Paper className="paper">                                
                                    <Typography variant="h2">Confirmar Pago</Typography>
                                    <form className="form" onSubmit={() => alert("Gracias por su compra")}>
                                        <h1>Productos </h1>                                        
                                        <Divider />
                                        {this.props.orders.map((order) =>                                             
                                            <div>                                                
                                                <h2>{order.shop}</h2>
                                                <Divider />
                                                    <PurchaseForm purchases = {order.purchases} format = {this.props.format}/>                                                                                                    
                                                <Divider />
                                            </div>
                                        )}
                                        
                                        <br></br>
                                        <FormControl fullWidth>
                                            <div style = {{fontSize: '20px'}}> Precio Total de la Compra</div>                                    
                                            <TextField    
                                                fullWidth                                        
                                                disabled
                                                id="idTextPrecio"
                                                value={"$ " + this.props.price}
                                                variant="outlined"
                                            />
                                        </FormControl>

                                        <Divider />
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
            </div>
            </>
        );
    }

}

export default withRouter(PaymentForm);