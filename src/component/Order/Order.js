import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Button } from '@material-ui/core';
import DefaultView from './DefaultView';
import AppBar from '../appbar/AppBar';
import Atendido from './Atendido';

export default function Order(props){
    const [at,setAt]= React.useState(false);
    const [falta,setFalta]= React.useState(false);
    const [orders,setOrders] = React.useState([{id:0,items:[{id:7,name:'Hamburguesa',price:30},{id:8,name:'papas',price:50},{id:9,name:'Gaseosa',price:20}],status:'ready'},{id:1,items:[{id:7,name:'Hamburguesa',price:30},{id:8,name:'papas',price:50},{id:9,name:'Gaseosa',price:20}],status:'complete'}]);
    return (<div style={{width:'100%',height:'100%'}}>
        <AppBar/>
        <div style={{width:'100%',height:'80px'}}/>
        <div style={{width:'100%',height:'calc(100% - 80px)' ,display:'flex',flexDirection:'row'}}>
            <div style={{width:'25%',height:'100%'}}><center><ListAltIcon style={{fontSize:'100'}}/></center>
            <br></br>
            <center>
                <Button style={{width:'90%',borderBottom:'1px solid black'}} onClick={()=>{
                    setAt(true); setFalta(false);}}>Pedidos atendidos</Button>
                <Button onClick={()=>{setAt(false); setFalta(true);}} style={{width:'90%',borderBottom:'1px solid black'}}>Pedidos faltantes</Button>    
            </center>
            </div>
            <div style={{width:'75%',height:'100%'}}>
                {!at && !setFalta && <DefaultView/>}
                {at && <Atendido orders={orders}/>}
            </div>
        </div>
    </div>);

}