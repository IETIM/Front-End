import React from 'react';
import SidebarPage from '../sidebar/SidebarPage';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import {AppBarCss} from './AppBarCss';

function AppBar (props){

    const classes = AppBarCss();

    return( 
            <>                
                <div className = {classes.sidebarpage}> 
                    <SidebarPage />
                    <ShoppingCart 
                        sumAmount = {props.sumAmount}
                        removeProduct = {props.removeProduct}
                        removeAllProductsCart = {props.removeAllProductsCart}
                        productsCart = {props.productsCart == null ? []: props.productsCart}
                        modify = {props.modify}
                        isChange = {props.isChange}
                        setIsChange =  {props.setIsChange}/>    
                </div>
                    
            </>
    );    
    
}

export default AppBar;