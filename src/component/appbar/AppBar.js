import React from 'react';
import SidebarPage from '../sidebar/SidebarPage';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import {AppBarCss} from './AppBarCss';

function AppBar (){

    const classes = AppBarCss();

    return( 
            <>                
                <div className = {classes.sidebarpage}> 
                    <SidebarPage />
                    <ShoppingCart />    
                </div>
                    
            </>
    );    
    
}

export default AppBar;