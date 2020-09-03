import React from 'react';
import ProductCard from './ProductCard'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { withStyles} from '@material-ui/core/styles';
import {ProductsRow} from './ProductsRow';




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

        const testList=[{nombre:"nombre1",precio:"$100",imagen:"product.png"}
        ,{nombre:"nombre1",precio:"$99",imagen:"product.png"}
        ,{nombre:"nombre1",precio:"$98",imagen:"product.png"},
        {nombre:"nombre1",precio:"$97",imagen:"product.png"},
        {nombre:"nombre1",precio:"$96",imagen:"product.png"}]
        const rows=testList.length/4;
        const cols=8
        let lis=[]
        const tamaño=12;
        let temp=[]

        return<div style={{height:"100%",width:"100%", flexGrow: "1"}}>
            
        <Grid container spacing={1} >
         <ProductsRow  productos={testList}/>          
        </Grid>
        
      </div>



        
        
    }

}
export default withStyles(useStyles, { withTheme: true })(ProductGrid);






