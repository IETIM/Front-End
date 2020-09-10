import React from 'react';
import MapPlace from './Map';
import {Toolbar,IconButton,Typography,MenuIcon, Grid} from '@material-ui/core';
import {ImageSearch} from '@material-ui/icons';
import CategoryView from './CategoryView';
import ItemsView from './ItemsView';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import AppBar from '../appbar/AppBar';



export default class PlaceView extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {funUpdate:null};
        this.setFunUpdate = this.setFunUpdate.bind(this);
        this.setCategory = this.setCategory.bind(this);
    }

    setCategory(category){
        console.log("category ");
        this.state.funUpdate(category);
    }
    setFunUpdate(fun){
        console.log("set function");
        this.state.funUpdate=fun;
        this.setState(this.state);
    }

    

    render(){
        return(<div style={{width:'100%',height:'100%',margin:'0px',padding:'0px'}}>            
            <AppBar />

            <div style = {{height: '80px', width: '100%'}}></div>
            <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'row',margin:'0px',padding:'0px'}}>
                <div style={{width:'25%',height:'100%',background:'white',margin:'0px',padding:'0px',border:'1px solid black'}}>
                    <br></br>
                    <center><Typography gutterBottom variant="h5" component="h2">Encuentra: </Typography></center>
                    <div style={{width:'10px',height:'30px'}}></div>
                    <CategoryView select={(cad)=>this.setCategory(cad)}></CategoryView>
                    <div style={{width:'10px',height:'30px'}}></div>
                    <MapPlace></MapPlace>
                </div>
                <div  style={{width:'75%',height:'100%',background:'white',margin:'0px',padding:'0px'}}>
                    <ItemsView setFun={(fun)=>this.setFunUpdate(fun)}></ItemsView>
                </div>
            </div>
        </div>)
    }
}