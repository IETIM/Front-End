import React from 'react';
import  ProductGrid from './ProductsGrid';
import DrawerLeft from './DrawerLeft';
import { InsertEmoticonSharp } from '@material-ui/icons';
import DialogContent from '@material-ui/core/DialogContent';
import { Modal } from '@material-ui/core';
import ProductModal from './ProductModal';


const items=[{nombre:"nombre1",precio:100,descripcion:"producto1"}
        ,{nombre:"nombre2",precio:99,descripcion:"producto2"}
        ,{nombre:"nombre3",precio:98,descripcion:"producto3"},
        {nombre:"nombre4",precio:97,descripcion:"producto4"},
        {nombre:"nombre5",precio:96,descripcion:"producto5"}]

const tendero= { nombre:"Pepito Perez", nombreTienda:"Variedades pepito", direccion:"avenida 123 calle 321", telefono:"1234567890"}

export class SellerDashboard extends React.Component{

    constructor(props) {
        super(props);
        this.state={openProductModal:false, openUpdateModal:false,indexToUpdate:""}
        this.handleNewProductModal=this.handleNewProductModal.bind(this)
        this.handleNewProduct=this.handleNewProduct.bind(this)
        this.handleUpdateProductModal=this.handleUpdateProductModal.bind(this)
        this.handleUpdateProduct=this.handleUpdateProduct.bind(this)


    }

    render(){
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
                <DrawerLeft main={<ProductGrid productos={items} handleUpdateProductModal={this.handleUpdateProductModal} />} tendero={tendero} handleNewProductModal={this.handleNewProductModal}/>
                </div>}
        </div>;
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
        this.setState({
            openUpdateModal:false
        })
    }

}