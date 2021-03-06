import React from 'react';
import  ProductGrid from './ProductsGrid';
import DrawerLeft from './DrawerLeft';
import { InsertEmoticonSharp } from '@material-ui/icons';
import DialogContent from '@material-ui/core/DialogContent';
import { Modal } from '@material-ui/core';
import ProductModal from './ProductModal';
import { Redirect } from 'react-router-dom';


const items=[{nombre:"nombre1",precio:100,descripcion:"producto1",existencias:10}
        ,{nombre:"nombre2",precio:99,descripcion:"producto2",existencias:9}
        ,{nombre:"nombre3",precio:98,descripcion:"producto3",existencias:8},
        {nombre:"nombre4",precio:97,descripcion:"producto4",existencias:7},
        {nombre:"nombre5",precio:96,descripcion:"producto5",existencias:6}]


export class SellerDashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state={openProductModal:false, openUpdateModal:false,indexToUpdate:"",path:""}
        this.handleNewProductModal=this.handleNewProductModal.bind(this)
        this.handleNewProduct=this.handleNewProduct.bind(this)
        this.handleUpdateProductModal=this.handleUpdateProductModal.bind(this)
        this.handleUpdateProduct=this.handleUpdateProduct.bind(this)
        this.handleRedirect=this.handleRedirect.bind(this)



    }

    render(){
        if(this.state.path!=""){
            return <Redirect to={this.state.path} />
        }
        return <div style={{height:"100%", width: "100%", display:"flex", flexDirection: "row"}} >
            {
                <div>
                
                <Modal open={this.state.openProductModal}
                onClose={this.handleNewProductModal}
                >
                <ProductModal handleProduct={this.handleNewProduct} required={true} verb={"Añadir"}/>
                </Modal>

                <Modal open={this.state.openUpdateModal}
                onClose={this.handleUpdateProductModal}
                >
                <ProductModal handleProduct={this.handleUpdateProduct} required={false} verb={"Actualizar"}/>
                </Modal>
                <DrawerLeft main={<ProductGrid productos={items} handleUpdateProductModal={this.handleUpdateProductModal} />}
                             handleNewProductModal={this.handleNewProductModal}
                             handleRedirect={this.handleRedirect}/>
                </div>}
        </div>;
    }
    handleRedirect(pathToRedirect){
        this.setState({
            path:pathToRedirect
        })

    }
    handleNewProductModal(){
        this.setState(prevstate=>({
            openProductModal: !prevstate.openProductModal
        }))
    }
    handleUpdateProductModal(ind){
        this.setState(prevstate=>({
            openUpdateModal: !prevstate.openUpdateModal,
            indexToUpdate:ind
        }))
    }
    handleNewProduct(product){
        items.push(product)
        this.setState({
            openProductModal:false
        })
    }
    handleUpdateProduct(product){
        if(product.nombre!=""){
            items[this.state.indexToUpdate].nombre=product.nombre
        }
        if(product.precio!=""){
            items[this.state.indexToUpdate].precio=product.precio
        }
        if(product.descripcion!=""){
            items[this.state.indexToUpdate].descripcion=product.descripcion
        }
        if(product.existencias!=""){
            items[this.state.indexToUpdate].existencias=product.existencias
        }

        this.setState({
            openUpdateModal:false
        })
    }

}