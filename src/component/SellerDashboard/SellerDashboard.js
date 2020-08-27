import React from 'react';
import { Navegacion } from './Navegacion';
import { ProductGrid } from './ProductsGrid';



export class SellerDashboard extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){


        return <div style={{height:"100%", width: "100%", display:"flex", flexDirection: "row",backgroundImage: 'linear-gradient(135deg, #08185B, #949CBC)'}} >
            <div style={{height:"100%",width:"25%"}}>
                <div style={{width:"100%",height:"170px"}}></div>
                <Navegacion/></div>


            <div style={{height:"100%",width:"75%" }}><ProductGrid/></div>





        </div>;
    }

}