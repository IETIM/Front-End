import React from 'react';
import { Button,TextField,Typography } from '@material-ui/core';


export class Navegacion extends React.Component{

    constructor(props){
        super(props);
        this.state={nombre:"Tienda 1",descripcion:"Esto es una tienda",numeropedidos:"99"}
    }

    render(){


        return (
            <div style={{border:"2px solid white",height:"72%"}}>
                <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{padding:"10px"}}><Typography variant="h4" component="h1">{this.state.nombre}</Typography></div>
                    <div style={{padding:"10px"}}><Typography variant="h6" component="body1">{this.state.descripcion}</Typography></div>
                    <div style={{padding:"10px"}}><Typography variant="h6" component="body1">{this.state.numeropedidos}</Typography></div>
                </div>
            </div>
                ) 
        
    }


}