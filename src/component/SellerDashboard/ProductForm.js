import React from 'react';
import { Fab,InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';



export class ProductForm extends React.Component{

    render(){

        return(
            <div>
                <label htmlFor="upload-photo">
                <input
                    style={{ display: 'none' }}
                    id="upload-photo"
                    name="upload-photo"
                    type="file"
                    onChange={this.props.handleFileChange}
                />

                <Fab
                    color="primary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                >
                    <ImageIcon /> Cargar Imagen
                </Fab>
                <br />
                <br/>
                <br/>

                </label>

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