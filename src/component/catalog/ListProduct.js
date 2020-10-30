import React from 'react';
import Product from './Product'
import  {Category}  from './Category';
import Grid from "@material-ui/core/Grid";
import { Divider } from '@material-ui/core';

export class ListProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const ProductList = this.props.categories.map((category,i) => {
            const product = category.products.map((item,j)=>{
                return (
                    <Grid item xs="auto">
                        <Product key={j} name={item.name} price={item.price} description={item.description} image={item.image} addProduc = {this.props.addProduc}/>
                    </Grid>
                );
            })
            return (
                <div>
                <Category key={i} name={category.name} products={product}/>
                </div>
            );
        });

        return (
            <div>
                {ProductList}
            </div>
                
        );


    }

}