import React from 'react';
import { InputLabel,Button, TextField,Select, FormControl } from '@material-ui/core';
import { withStyles} from '@material-ui/core/styles';
import { ProductForm } from './ProductForm';
import SaveIcon from '@material-ui/icons/Save';






  const useStyles =theme => ({
    paper: {
        margin:'auto',
        position:'fixed',
        top:0,
        bottom:0,
        left:0,
        right:0,
        width: 400,
        height: 460,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflowY: "auto",
    }
    
})


 class ProductModal extends React.Component{

    constructor(props){
        super(props)
        this.state={name:"",price:"",description:"" ,stocks:"",category:"",image:null,imagePreview:null,uploadedImage:false}
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileChange=this.handleFileChange.bind(this);


    }

    render() { 
        const { classes } = this.props;
        return (      
            
            <div className={classes.paper}  style={{textAlign:"center"} } tabIndex="-1" >
                <form  onSubmit={this.handleSubmit}>

                
                <h3>{this.props.verb} producto</h3>
                <div >
                    <img style={{maxWidth:180 ,height:100,overflow: "hidden",objectFit: "cover"}} src={this.state.imagePreview}/>
                </div>
                
                
                <ProductForm handleChange={this.handleChange} name={this.state.name} 
                            price={this.state.price} description={this.state.description} 
                            stocks={this.state.stocks} required={this.props.required} 
                            category={this.state.category} handleFileChange={this.handleFileChange}></ProductForm>
                <br/>
                <br/>
                <Button type="submit"
                            variant="contained"
                            color="primary"
                            className="submit"
                            startIcon={<SaveIcon />}

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
    handleFileChange(e){
        if(e.target.files[0]){
            this.setState({uploadedImage:true ,image:e.target.files[0], imagePreview: URL.createObjectURL(e.target.files[0])})
        }

    }

    handleSubmit(e){
        e.preventDefault();
        this.props.handleProduct({name: this.state.name,price: this.state.price,description: this.state.description,stocks:this.state.stocks,category:this.state.category,image:this.state.image,uploadedImage:this.state.uploadedImage})
    }

}
export default withStyles(useStyles, { withTheme: true })(ProductModal);
