import React from 'react';
import Order from './Order';
import { Button, Dialog, DialogContent } from '@material-ui/core';

export default function OrderItem(props){
    const [modal,setModal] = React.useState(false);
    return(<React.Fragment><center><div style={{width:'300px', height:'200px',border:'1px solid black'}}>
        <b>Pedido {props.order.id}</b>
        <br></br>
        <b>Numero de elementos: </b>{props.order.items.length}
        <br></br>
        <b>Precio: </b> {props.order.totalPrice}
        <br/><br/>
        <Button onClick={()=>setModal(true)}>Ver Detalle</Button>
        <br/><br/>
        {props.order.status=="ready" && <Button onClick={()=>props.updateOrden(props.order)}>Orden Completa</Button>}

    </div></center><br></br>
        <Dialog open={modal}>
            <DialogContent>
                <h1>Detalle de orden</h1>
                <table border="1" style={{borderCollapse:'collapse'}}>
                    <tr>
                        <td style={{width:'150px',background:'blue',color:'white'}}>Producto</td>
                        <td style={{width:'100px',background:'blue',color:'white'}}>Precio</td>
                        <td style={{width:'100px',background:'blue',color:'white'}}>Cantidad</td>
                    </tr>
                    {props.order.items.map((item)=>{
                        return (<tr>
                            <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.number}</td>
                        </tr>)
                    })}
                </table>
                <br></br>
                <center><Button onClick={()=>setModal(false)}>Cerrar</Button></center>
                <br/>
                {props.order.status=="ready" && <center><Button onClick={()=>{setModal(false);
                                        props.updateOrden(props.order);}}>Atender</Button></center>}
            </DialogContent>
        </Dialog>
    </React.Fragment>)
}