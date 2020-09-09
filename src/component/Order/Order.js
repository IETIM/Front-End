import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Button } from '@material-ui/core';
import DefaultView from './DefaultView';
import AppBar from '../appbar/AppBar';
import Atendido from './Atendido';
import Faltan from './Faltan';

export default function Order(props){
    const [at,setAt]= React.useState(false);
    const [falta,setFalta]= React.useState(false);
    const [orders,setOrders] = React.useState([{id:0,items:[{id:7,name:'Hamburguesa',price:30,number:1},{id:8,name:'papas',price:50,number:1},{id:9,name:'Gaseosa',price:20,numbre:1}],status:'ready',date:'20-08-2020'},{id:1,items:[{id:7,name:'Hamburguesa',price:30,number:1},{id:8,name:'papas',price:50,number:1},{id:9,name:'Gaseosa',price:20,number:1}],date:'20-08-2020',status:'complete'}]);

    var complete = function(order){
        for(var i=0;i<orders.length;i++){
            if(orders[i].id==order.id){
                console.log("update");
                orders[i].status = "complete";
            }
        }
        setOrders(orders);
    }
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
                {!at && !falta && <DefaultView/>}
                {at && <Atendido orders={orders} />}
                {falta && <Faltan updateOrden={complete} orders={orders}/>}
            </div>
        </div>
    </div>);

}