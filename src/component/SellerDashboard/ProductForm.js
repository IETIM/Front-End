import React from 'react';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';


export class ProductForm extends React.Component{

    render(){

        return(
            <div>
                <TextField
                    required={this.props.required}
                    id="nombre"
                    label="Nombre del producto"
                    name="nombre"
                    onChange={this.props.handleChange}
                    value={this.props.nombre}
                    variant="outlined">
                </TextField>
                <br/>
                <TextField
                    required={this.props.required}
                    id="precio"
                    label="Precio"
                    name="precio"
                    type="number"
                    onChange={this.props.handleChange}
                    value={this.props.precio}
                    variant="outlined">
                </TextField>
                <br/>
                <TextField
                    required={this.props.required}
                    id="descripcion"
                    label="Descripcion"
                    name="descripcion"
                    onChange={this.props.handleChange}
                    value={this.props.descripcion}
                    variant="outlined">
                </TextField>
            </div>
                
    
        )
    }
}