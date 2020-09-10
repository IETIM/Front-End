import React from 'react';
import { Button } from '@material-ui/core';
import DatesOrders from './DatesOrders';

export default function Atendido(props){
    var atendidos = [];
    var total =0;
    var dates = [];
    var existDate = function(date){
        var ban = false;
        dates.forEach((d)=> ban = ban || d==date);
        return ban;
    } 
    props.orders.forEach((order)=>{
        if(order.status=="complete"){
            atendidos.push(order);
            order.totalPrice=0;
            order.items.forEach((item)=>order.totalPrice+=item.price);
            total+=order.totalPrice;
            if(!existDate(order.date)) dates.push(order.date);
        }
    });    
    console.log(dates);
    return(<div style={{width:'100%',height:'100%',overflowY:'scroll'}}>
        <h1>Atendidos</h1>
        <br></br>
        <b>Total Ganancias: </b>{total}
        <br></br>
        <br></br>
           {dates.map((date)=> <DatesOrders date={date} orders={atendidos}/>)}
        </div>)
}