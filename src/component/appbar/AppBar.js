import React from 'react';
import SidebarPage from '../sidebar/SidebarPage';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import {AppBarCss} from './AppBarCss';

function AppBar (props){

    const classes = AppBarCss();

    console.log("---------------------- PRINT APPBAR -------------------");
    console.log(props.productsCart);
    return( 
            <>                
                <div className = {classes.sidebarpage}> 
                    <SidebarPage />
                    <ShoppingCart 
                        sumAmount = {props.sumAmount}
                        removeProduct = {props.removeProduct}
                        removeAllProductsCart = {props.removeAllProductsCart}
                        productsCart = {props.productsCart == null ? []: props.productsCart}/>    
                </div>
                    
            </>
    );    
    
}

export default AppBar;