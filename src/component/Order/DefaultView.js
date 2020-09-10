import React from 'react';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Typography from '@material-ui/core/Typography';

export default function DefaultView(){
    return(<div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <KeyboardReturnIcon style={{width:'100px',height:'100px',color:'green'}}/>
        <br></br>
        <br></br>
        <Typography gutterBottom variant="h5" component="h2">Selecciona una categoria a la izquierda e inicia a navegar.
        </Typography>
    </div>)
}