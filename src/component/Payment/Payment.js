import React from 'react';
import AppBar from '../appbar/AppBar';
import {Snackbar, Typography,SnackbarContent, Button} from '@material-ui/core';
import PaymentForm from './PaymentForm';
import CloseIcon from '@material-ui/icons/Close';

function successFullPay(obj){
    if(obj.tarjeta=="11111111" && obj.digit=="0000" && obj.date=="2020-12-12") return true;
    else return false;
}

export default function Payment(props){
    localStorage.setItem("price",500000);
    const [accept,setAccept] = React.useState(null);
    const pay = function(obj){
        console.log(obj);
        if(successFullPay(obj)) setAccept(true);
        else setAccept(false);
    }
    return (<div style={{width:'100hv',height:'100hv'}}>
        <AppBar />
        <div style = {{height: '80px', width: '100%'}}></div>
        <div style={{width:'100%',height:'calc( 100% - 80px )'}}>
            <div style={{display:'flex',flexDirection:'row',width:'100%',height:'100%'}}>
                <div style={{width:'30%',height:'100%',background:'orange'}}></div>
                <div style={{width:'70%',height:'100%'}}>
                    <div style={{width:'100%',height:'20px'}}></div>
                    <center><Typography gutterBottom variant="h5" component="h2">Pagos en linea.</Typography></center>
                    <center><div style={{width:'90%',height:'90%',textAlign:'left'}}>
                        <div><b>Valor a pagar:</b> $ {localStorage.getItem("price")}</div>
                        <div style={{width:'100%',height:'40px'}}></div>
                        <div style={{width:'100%'}}>
                            <PaymentForm pay={pay}></PaymentForm>
                        </div>
                        </div></center>
                </div>
            </div>
            <Snackbar autoHideDuration={1000} open={accept!=null && accept}>
                <SnackbarContent style={{'background':'green'}} message="Pago satisfactorio" action={<CloseIcon onClick={()=>setAccept(null)}/>}></SnackbarContent>
            </Snackbar>
            <Snackbar open={accept!=null && !accept}>
                <SnackbarContent style={{'background':'Red'}} message="Verifica los datos." action={<CloseIcon onClick={()=>setAccept(null)}/>}></SnackbarContent>
            </Snackbar>
        </div>
    </div>)
}