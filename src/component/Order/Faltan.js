import React from 'react';
import DatesOrders from './DatesOrders';

export default function Faltan(props){
    const [ban,setBan] = React.useState(false);
    var atendidos = [];
    var total =0;
    var dates = [];
    var existDate = function(date){
        var ban = false;
        dates.forEach((d)=> ban = ban || d==date);
        return ban;
    } 
    props.orders.forEach((order)=>{
        if(order.state=="not payed"){
            atendidos.push(order);
            order.totalPrice=0;
            order.items.forEach((item)=>order.totalPrice+=item.price);
            total+=order.totalPrice;
            if(!existDate(order.date)) dates.push(order.date);
        }
    });    
    console.log(dates);
    return(<div style={{width:'100%',height:'100%',overflowY:'scroll'}}>
        <h1>Faltantes</h1>
        <br></br>
        <b>Total Ganancias: </b>{total}
        <br></br>
        <br></br>
           {dates.map((date)=> <DatesOrders updateOrden={(item)=>{
               props.updateOrden(item);
               setBan(!ban);
               }} date={date} orders={atendidos}/>)}
        </div>)

}