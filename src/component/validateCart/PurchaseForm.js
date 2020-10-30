import React from 'react';
import {withRouter} from 'react-router-dom';


export class PurchaseForm extends React.Component{

    constructor(props) {
        super(props);                      
    }    

    
    render(){        
        return (            
            <div style = {{width: '100%', height: '100%'}}>
                <div style = {{width: '25%', float: 'left'}}>
                    <h3> Producto </h3>

                    {this.props.purchases.map((purchase) =>
                        <li> {purchase.name} </li>
                    )}
                </div>
                <div style = {{width: '25%', float: 'left'}}>
                    <h3> Precio </h3>
                    {this.props.purchases.map((purchase) =>
                        <div> $ {this.props.format(purchase.price .toString())} </div>
                    )}
                </div>
                <div style = {{width: '25%', float: 'left'}}>
                    <h3> Cantidad </h3>
                    {this.props.purchases.map((purchase) =>
                        <div> {purchase.quantity} {purchase.quantity == 1 ? "Unidad": "Unidades"}</div>
                    )}
                </div>
                <div style = {{width: '25%', float: 'left'}}>
                    <h3> Precio Total </h3>
                    {this.props.purchases.map((purchase) =>
                        <div> $ {this.props.format((purchase.price * purchase.quantity) .toString())} </div>
                    )}
                </div>
                <div> &nbsp; </div>
            </div>
        );
    }

}

export default withRouter(PurchaseForm);