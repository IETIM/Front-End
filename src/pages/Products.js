import React from 'react';
import AppBar from '../component/appbar/AppBar';

export default function Products() {
    return (
        <div className = 'products'>            
            <AppBar />
            <div style = {{height: '80px', width: '100%'}}></div>
            <header>
                <h1> Productos </h1>
            </header>
        </div>
    )
}
