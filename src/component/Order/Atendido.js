import React from 'react';
import { Button } from '@material-ui/core';

export default function Atendido(props){
    var atendidos = [];
    var total =0;
    props.orders.forEach((order)=>{
        if(order.status=="complete"){
            atendidos.push(order);
            order.totalPrice=0;
            order.items.forEach((item)=>order.totalPrice+=item.price);
            total+=order.totalPrice;
        }
    });
    console.log(atendidos);
    return(<div style={{width:'100%',height:'100%',overflowY:'scroll'}}>
        <h1>Atendidos</h1>
        <br></br>
        Ganancias:{total}
        <br></br>
            {atendidos.map((pedido)=><Button style={{width:'100%'}}>Total items: {pedido.items.length}<div style={{width:'30%'}}>{pedido.items.map((item)=>item.name+"-")}</div> Price: {pedido.totalPrice} </Button>)}
        </div>)
}