import React from 'react';
import { Button } from '@material-ui/core';
export default function CategoryView(props){
    var category = ["Restaurantes","Cafeterias","Droguerias","Supermercados"]
    return(
        category.map((cat)=><Button onClick={(e)=>{props.select(cat);}} style={{width:'100%',borderBottom:'1px solid black', textAlign:'center'}}>{cat}</Button>)
    )
}