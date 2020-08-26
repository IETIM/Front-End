import React from 'react';
import Typography from '@material-ui/core/Typography';
import CardItem from './CardItem';
export default class ItemsView extends React.Component{
    constructor(props){
        super(props);
        this.state = {selected:'',data:[{name:'Local 1',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 1ra'},{name:'local 2',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 2da'},{name:'local 3',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 3ra'},{name:'Local 4',descripcion:"Sabores de la cocina colombian",dirreccion:'cr 4ta'},{name:'local 5',descripcion:"Sabores de la cocina colombian",dirreccion:'cra 5ta'}]};
        this.setSelected = this.setSelected.bind(this);
        this.props.setFun(this.setSelected);
    }

    setSelected(selected){
        console.log(selected);
        this.state.selected = selected;
        this.setState(this.state);
    }
    render(){
        console.log(this.state.selected);
        if(this.state.selected==''){
            return (<div>Seleccione una categoria</div>)
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
                    return (<div key={"row-"+i} style={{width:'100%',height:'160',display:'flex',flexDirection:'row'}}>
                        {[0,1,2,4].map((col)=>{
                           return  (3*row+col<this.state.data.length && <CardItem 
                            key={"Card-"+row+"-"+col}
                            title={this.state.data[3*row+col].name.toUpperCase()}
                            descripcion={this.state.data[3*row+col].descripcion}></CardItem>);
                        })}
                    </div>);
                })}
            </div>
        </div>);
    }

    componentWillMount(){

    }
}
