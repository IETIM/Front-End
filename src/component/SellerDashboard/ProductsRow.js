import ProductCard from './ProductCard'
import Grid from '@material-ui/core/Grid'
import React from 'react';




export class ProductsRow extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const list=this.props.productos;
        return <div >
            <Grid container item  spacing={2}>
            {list.map((producto,index)=>{
                return <Grid key={"producto"+index}  item >
                <ProductCard title={producto.nombre} descripcion={producto.precio}/>
                </Grid>
                })}
            </Grid>
        </div>
    }
}