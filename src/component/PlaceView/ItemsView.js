import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardItem from './CardItem';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Axios from 'axios';

const url = "https://ieti-deep-backend.herokuapp.com";

export default class ItemsView extends React.Component{
    constructor(props){
        super(props);
        this.state = {selected:'',data:[{name:'Local 1',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 1ra'},{name:'local 2',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 2da'},{name:'local 3',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 3ra'},{name:'Local 4',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 4ta'},{name:'local 5',descripcion:"Sabores de la cocina colombian",dirreccion:'cra 5ta'},{name:'local 6',descripcion:"Sabores de la cocina colombian",dirreccion:'cra 6ta'}]};
        this.setSelected = this.setSelected.bind(this);
        this.props.setFun(this.setSelected);
        console.log("Creo ItemsView");
    }

    setSelected(selected){
        console.log(selected);
        this.state.selected = selected;
        this.setState(this.state);
        this.componentWillMount();
    }
    render(){
        //console.log(this.state.data);
        if(this.state.selected==''){
            return (<div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'50%',height:'50%'}}>
                    <center><KeyboardReturnIcon style={{width:'100px',height:'100px',color:'green'}}/></center>
                    <Typography gutterBottom variant="h5" component="h2">Selecciona una categoria a la izquierda e inicia a navegar.
                    </Typography></div>
            </div>)
        }
        var li = [];
        var lon = this.state.data.length/4;
        for(var i=0;i<lon;i++) li.push(i);
        return(<div style={{width:'100%',height:'100%',margin:'0px',padding:'0px',display:'block'}}>
            <div style={{width:'100%',height:'50px',background:'gray',color:'white',textAlign:'center',top:'0px',border:'3px solid black',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography gutterBottom variant="h5" component="h2">{this.state.selected.toUpperCase()}</Typography>
            </div>
            <div style={{width:'100%',height:'90%',overflowY:'scroll'}}>
                {li.map((row)=>{
                    return (<React.Fragment>
                        <div style={{width:'100%',height:'10px'}}></div>
                        <div key={"row-"+i} style={{width:'100%',height:'160',display:'flex',flexDirection:'row'}}>
                            <div style={{width:'4%',height:'1px'}}/>
                                {[0,1,2,3].map((col)=>{
                                    console.log(row+" "+col+" ");
                                return( <div style={{width:'100%',height:'100%'}}>
                                    <div style={{width:'10%',height:'1px'}}/>
                                    {(4*row+col<this.state.data.length && <CardItem 
                                    key={"Card-"+row+"-"+col}
                                    title={this.state.data[4*row+col].name.toUpperCase()}
                                    descripcion={this.state.data[4*row+col].location}></CardItem>)}
                                    </div>);
                                })}
                        <div style={{width:'1%',height:'1px'}}/>
                    </div><div style={{width:'100%',height:'10px'}}></div></React.Fragment>);
                })}
            </div>
        </div>);
    }

    componentWillMount(){
        if(this.state.selected!=''){
            Axios.get(url+"/shops?type="+this.state.selected)
                .then((data)=>this.setState({data:data.data}))
                .catch((err)=>alert("No se pudo cargar los datos"));
        }
    }

    componentDidMount(){
        console.log("entro");
    }
}
