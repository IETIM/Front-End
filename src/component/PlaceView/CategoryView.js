import React from 'react';
import { Button } from '@material-ui/core';
export default function CategoryView(props){
    var category = ["Restaurantes","Cafeterias","Droguerias","Supermercados"]
    return(
        <div style={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column',color:'white'}}>
        {category.map((cat,i)=><Button key={"button-"+i} onClick={(e)=>{props.select(cat);}} style={{width:'90%',border:'1px solid blue', textAlign:'center'}} color="primary">{cat}</Button>)}
        </div>
    )
}