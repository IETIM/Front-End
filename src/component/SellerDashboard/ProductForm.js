import React from 'react';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';


export class ProductForm extends React.Component{

    render(){

        return(
            <div>
                <TextField
                    required={this.props.required}
                    id="name"
                    label="Nombre del producto"
                    name="name"
                    onChange={this.props.handleChange}
                    value={this.props.name}
                    variant="outlined">
                </TextField>
                <br/>
                <TextField
                    required={this.props.required}
                    id="price"
                    label="Precio"
                    name="price"
                    type="number"
                    onChange={this.props.handleChange}
                    value={this.props.price}
                    variant="outlined">
                </TextField>
                <br/>
                <TextField
                    required={this.props.required}
                    id="stocks"
                    label="Existencias"
                    name="stocks"
                    type="number"
                    onChange={this.props.handleChange}
                    value={this.props.stocks}
                    variant="outlined">
                </TextField>
                <br/>
                <TextField
                    required={this.props.required}
                    id="description"
                    label="Descripcion"
                    name="description"
                    onChange={this.props.handleChange}
                    value={this.props.description}
                    variant="outlined">
                </TextField>
                <br/>
                <TextField
                    required={this.props.required}
                    id="category"
                    label="Categoria"
                    name="category"
                    onChange={this.props.handleChange}
                    value={this.props.category}
                    variant="outlined">
                </TextField>
            </div>
                
    
        )
    }
}