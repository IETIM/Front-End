import React from 'react';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import { ProductForm } from './ProductForm';





  const useStyles =theme => ({
    paper: {
        margin:'auto',
        position:'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
        width: 300,
        height: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
    
})


 class ProductModal extends React.Component{

    constructor(props){
        super(props)
        this.state={nombre:"",precio:"",descripcion:"" ,existencias:""}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);


    }

    render() { 
        const { classes } = this.props;
        return (      
            
            <div className={classes.paper}  style={{textAlign:"center"} } tabIndex="-1" >
                <form  onSubmit={this.handleSubmit}>
                <h3>{this.props.verb} producto</h3>
                <ProductForm handleChange={this.handleChange} nombre={this.state.nombre} 
                            precio={this.state.precio} descripcion={this.state.descripcion} 
                            existencias={this.state.existencias} required={this.props.required}></ProductForm>
                <br/>
                <br/>
                <Button type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            >
                    {this.props.verb} 
                </Button>
                <br/>
            </form>
            </div>         
            
        )
    }
    handleChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        this.setState({[nam]: val});
      }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleProduct({nombre: this.state.nombre,precio: this.state.precio,descripcion: this.state.descripcion,existencias:this.state.existencias})
    }

}
export default withStyles(useStyles, { withTheme: true })(ProductModal);
