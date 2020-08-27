import React from 'react';
import { Button } from '@material-ui/core';

export class Navegacion extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const text=["Logout","Home","Add product","Profile"]

        return text.map(text=><Button style={{width:"100%",borderBottom:"1px solid black"}}>{text}</Button>)
    }


}