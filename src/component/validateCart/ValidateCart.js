import React from 'react';

export default class ValidateCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productsCart: []};        
    }

    render() {    
        return (
            <div>
                <header>
                    <h1> Validar Productos </h1>
                </header>
            </div>
        );
    }
}



