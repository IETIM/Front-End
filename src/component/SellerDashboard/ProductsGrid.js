import React from 'react';
import ProductCard from './ProductCard'

export class ProductGrid extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const testList=[{nombre:"nombre1",precio:"$100",imagen:"product.png"}
        ,{nombre:"nombre1",precio:"$99",imagen:"product.png"}
        ,{nombre:"nombre1",precio:"$98",imagen:"product.png"},
        {nombre:"nombre1",precio:"$97",imagen:"product.png"},
        {nombre:"nombre1",precio:"$96",imagen:"product.png"}]
        const rows=testList.length/4;
        const lis=[]
        for(var i=0;i<rows;i++){
            lis.push(i);
        }

        return <div style={{height:"100%",width:"100%"}}>
            <div style={{width:"100%",height:"80px", textAlign:"center"}}><h1>Mis productos</h1></div>
            {lis.map(row=>{
            return <div key={"row-"+row}style={{display:"flex",flexDirection:"row", width:"100%", height:'160'}}>{ [0,1,2,3].map(j=>{
                console.log(row+" "+j)
                
                return (row*4+j<testList.length ? <ProductCard key={"Card-"+row+","+j} title={testList[4*row+j].nombre} descripcion={testList[4*row+j].precio}></ProductCard>:<div></div>)

        })} </div>
                


        })}
            
        </div>
        
        
    }

}





