import React from 'react';
import { Navegacion } from './Navegacion';
import { ProductGrid } from './ProductsGrid';
import { SellerInfo } from './SellerInfo';

export class SellerDashboard extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return <div style={{height:"100%", width: "100%", display:"flex", flexDirection: "row"}} >
            <div style={{height:"25%",width:"25%"}}>
                <div style={{width:"100%",height:"30%"}}>                    
                </div>
                <div style={{height:"450px",width:"100%", paddingLeft:"10%", paddingRight:"10%"}}><SellerInfo/></div>
            </div>
            
            <div style={{height:"100%",width:"75%" }}><ProductGrid/></div>
        </div>;
    }

}