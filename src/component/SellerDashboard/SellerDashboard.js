import React from 'react';
import  ProductGrid from './ProductsGrid';
import DrawerLeft from './DrawerLeft';


export class SellerDashboard extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        return <div style={{height:"100%", width: "100%", display:"flex", flexDirection: "row"}} >
            {<DrawerLeft main={<ProductGrid/>}/>}
            
        </div>;
    }

}