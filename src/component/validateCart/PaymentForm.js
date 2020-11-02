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
import axios from 'axios';
import { getUrl } from '../../vars';

export class PaymentForm extends React.Component{

    constructor(props) {
        super(props);
        var order = 
        this.state = {paypal: true, description: "", currency: "USD", method: '', user: ""}
        this.handleMethod = this.handleMethod.bind(this);       
        this.getUser = this.getUser.bind(this);       
    }    

    handleMethod(e) {
        var flag = true;
        if (e.target.value === "Paypal") {        
            flag = false;
        }
        this.setState({
            paypal: flag,
            method: e.target.value
        });
    }

    handleDescription = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    handleCurrency = (e) => {
        this.setState({
            currency: e.target.value
        })
    }

    getUser () {
        axios.get(getUrl() + "/username", { headers: this.buildHeaders() })    
            .then(response => {               
                this.setState({user: response.data});
            });        
    }

    buildHeaders = () => {
        let headers = {'Authorization':localStorage.getItem("token")}
        return headers
    }
    
    submitPay = (event) => {
        event.preventDefault();    
        let jsonsOrders = [];
        var user = this.state.user;
        this.props.orders.map((order) => {
            let json = {shop: order.shop, method: this.state.method, purchases: [], description: this.state.description,
            currency: this.state.currency, user: user};
            let generatePurchase = [];
            for (var i = 0; i < order.purchases.length; i++) {
                let jsonPurchase = {productId: order.purchases[i].productId, quantity: order.purchases[i].quantity};
                generatePurchase.push(jsonPurchase);
            }
            json["purchases"] = generatePurchase;
            jsonsOrders.push(json);
        });
        console.log(" ---------------------- ORDERS SUBMIT PAY ---------------------- ")
        console.log(jsonsOrders)
        console.log(" ---------------------- ORDERS SUBMIT PAY ---------------------- ")
        this.generateOrders(jsonsOrders);
    }

    generateOrders = (orders) => {
        var responseOrders = [];
        let token = localStorage.getItem("token");
        const headers = {
            Authorization:token,
        };
        for (var i = 0; i < orders.length; i++) {
            axios.post(getUrl() + '/orders/new',
                orders[i],
                {headers : headers}
                )
                .then((response) =>  {
                    responseOrders.push(response.data);
                    this.payPaypal(responseOrders);
                })
                .catch(function (error) {
                    alert("Ha ocurrido un error al generar la orden")
                    console.log(error);
                });
        }
        
        
        
    }

    payPaypal = (orders) => {
        let token = localStorage.getItem("token");
        const headers = {
            Authorization: token
        };        
        for (var i = 0; i < orders.length; i++) {                      
            axios.post(getUrl() + '/pay/' + orders[i].id,
                '',
                {headers:headers}
            )
            .then(function (response) {
                window.location.replace(response.data);
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }    
    }

    componentDidMount() {
        this.getUser();
    }
        
    render(){
        console.log("--------------- PAYMENT FORM INI --------------")
        console.log(this.props)
        console.log("--------------- PAYMENT FORM  FIN --------------")
        console.log("------------ PAYMENT FORM STATE INI -----------")
        console.log(this.state)
        console.log("------------ PAYMENT FORM STATE FIN -----------")
        return (
            <>
            <div  hidden = {this.props.price == "0" ? false: true}>
                <div style = {{fontSize: '50px', paddingLeft: "50px"}}>
                    Tu lista de productos está vacía, añade al carrito para poder comprar los productos!
                </div>
            </div>
            <div hidden = {this.props.price == "0" ? true: false}>                
                <div className = "login" style = {{width:'90%', height:'100hv', display:'flex'}}>
                        <React.Fragment>
                            <CssBaseline />
                            <main className="layout">
                                <Paper className="paper">                                
                                    <Typography variant="h2">Confirmar Pago</Typography>
                                    <form className="form" onSubmit={this.submitPay}>
                                        <h1>Productos </h1>                                        
                                        <Divider />
                                        {this.props.orders.map((order, index) =>
                                            <div>                                                
                                                <h2>{order.shop}</h2>
                                                <Divider />
                                                    <PurchaseForm key = {order.shop + index}purchases = {order.purchases} format = {this.props.format}/>                                                                                                    
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
                                                <MenuItem value = "inShop">En tienda </MenuItem>
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
                                                    onChange = {this.handleCurrency}
                                                > 
                                                    <MenuItem value="USD"> (USD) Dólar Estadounidense </MenuItem>
                                                    <MenuItem value="EUR"> (EUR) Euro </MenuItem>
                                                    <MenuItem value="JPY"> (JPY) Yen </MenuItem>
                                                    <MenuItem value="GBP"> (GBP) Libra esterlina </MenuItem>
                                                    <MenuItem value="MXN"> (MXN) Peso Mexicano </MenuItem>
                                                </TextField>                                                                                
                                                <br></br>                                                   
                                        </FormControl>
                                        </div>                        
                                        
                                       
                                        <FormControl fullWidth>
                                            <div style = {{fontSize: '20px'}}> Descripción </div>                                    
                                            <TextField
                                                id="dTextDescripcion"
                                                defaultValue=""
                                                variant="outlined"
                                                style = {{width: '100%'}}
                                                onChange = {this.handleDescription}                                                
                                                helperText="Descripción de la compra"
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