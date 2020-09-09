import React from 'react';
import OrderItem from './OrderItem';
export default function DatesOrders(props){
    var orders = props.orders;
    var date = props.date;
    var torders = [];
    console.log(date);
    var total = 0;
    orders.forEach((order)=>{
        if(order.date==date){
             torders.push(order);
             total+=order.totalPrice;
        }
    });
    return(<div>
        <div style={{width:'100%', border:'1px solid blue'}}>
            <b>Fecha:</b> {date}
            <br></br>
            <b>Ganacias: </b>{total}
        </div>
        <br></br>
        {torders.map((order)=><OrderItem updateOrden={props.updateOrden} order={order}/>)}
    </div>)

}