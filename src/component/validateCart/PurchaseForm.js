import React from 'react';
import {withRouter} from 'react-router-dom';


export class PurchaseForm extends React.Component{

    constructor(props) {
        super(props);                      
    }    

    
    render(){        
        return (            
            <div style = {{width: '100%', height: '100%'}}>
                <div style = {{width: '33%', float: 'left'}}>
                    <h3> Producto </h3>
                    <ul>
                    {this.props.purchases.map((purchase) =>
                        <li> {purchase.name} </li>
                    )}
                    </ul>
                </div>
                <div style = {{width: '33%', float: 'left'}}>
                    <h3> Cantidad </h3>
                    {this.props.purchases.map((purchase) =>
                        <div> {purchase.quantity} {purchase.quantity == 1 ? "Unidad": "Unidades"}</div>
                    )}
                </div>
                <div style = {{width: '34%', float: 'right'}}>
                    <h3> Precio </h3>
                    {this.props.purchases.map((purchase) =>
                        <div> $ {this.props.format(purchase.price)} </div>
                    )}
                </div>
                <div> &nbsp; </div>
            </div>
        );
    }

}

export default withRouter(PurchaseForm);