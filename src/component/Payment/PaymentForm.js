import React from 'react';
import {TextField,Button} from '@material-ui/core';


export default function PaymentForm(props){
    const [tarjeta,setTarjeta] = React.useState("");
    const [digit,setDigit] = React.useState("");
    const [date,setDate] = React.useState("");
    return(<div style={{width:'100%'}}>
        <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
            <div style={{width:'50%'}}>Numero de tarjeta:</div>
            <div style={{width:'50%'}}><TextField type="text" onChange={(e)=> setTarjeta(e.target.value)} value={tarjeta} style={{background:'white'}}></TextField></div>
        </div>
        <div style={{width:'100%',height:'10px'}}></div>
        <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
            <div style={{width:'50%'}}>4 digitos de verificacion:</div>
            <div style={{width:'50%'}}><TextField type="text" value={digit} onChange={(e)=> setDigit(e.target.value)} style={{background:'white'}}></TextField></div>
        </div>
        <div style={{width:'100%',height:'10px'}}></div>
        <div style={{display:'flex',flexDirection:'row',width:'100%'}}>
            <div style={{width:'50%'}}>Fecha de expedicion:</div>
            <div style={{width:'50%'}}><TextField type="date" value={date} onChange={(e)=>setDate(e.target.value)} style={{background:'white'}}></TextField></div>
        </div>
        <div style={{width:'100%',height:'30px'}}></div>
        <div style={{width:'100%'}}><center><Button onClick={()=> props.pay({tarjeta:tarjeta,digit:digit,date:date.toString()})}>Pagar</Button></center></div>
        <div style={{width:'100%',height:'10px'}}></div>
    </div>)
}