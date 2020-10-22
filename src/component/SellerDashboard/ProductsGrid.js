import React from 'react';
import ProductCard from './ProductCard'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { withStyles} from '@material-ui/core/styles';




const useStyles = theme => ({
    root: {
      flexGrow: 1,
    },
  });


 class ProductGrid extends React.Component{

    


    constructor(props) {
        super(props);
    }

    render(){
        const { classes } = this.props;

        const list= this.props.products    
        return<div style={{height:"100%",width:"100%", flexGrow: "1"}}>
      
        <Grid container spacing={1} >
              <Grid container item  spacing={2}>
              {list.map((product,index)=>{
                  return <Grid key={"producto"+index}  item >
                  <ProductCard name= {product.name} price={product.price} index={index} 
                              description = {product.description} stocks={product.stocks} image={product.image}
                              handleUpdateProductModal={this.props.handleUpdateProductModal}/>
                  </Grid>
                  })}
              </Grid>
        </Grid>
        
      </div>



        
        
    }

}
export default withStyles(useStyles, { withTheme: true })(ProductGrid);






