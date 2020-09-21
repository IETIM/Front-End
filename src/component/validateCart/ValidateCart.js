import React from 'react';
import AppBar from "../appbar/AppBar";

export default class ValidateCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productsCart: []};        
    }

    render() {    
        return (
            <div>
                <AppBar/>
                <div style = {{height: '80px', width: '100%'}}></div>
                <div>
                    <header>
                        <h1> Validar Productos </h1>
                    </header>
                </div>
            </div>
        );
    }
}



