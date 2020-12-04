import React from 'react';
import ProductGrid from './ProductsGrid';
import DrawerLeft from './DrawerLeft';
import { InsertEmoticonSharp } from '@material-ui/icons';
import DialogContent from '@material-ui/core/DialogContent';
import { Modal } from '@material-ui/core';
import ProductModal from './ProductModal';
import { Redirect } from 'react-router-dom';
import { getUrl,IsTendero } from '../../vars'
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import { storage } from "../../firebase";
import { resolve } from 'path';
import { v4 as uuidv4 } from 'uuid';
import PlaceView from '../PlaceView/PlaceView';





class SellerDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { openProductModal: false, openUpdateModal: false, indexToUpdate: "", items: [], user: { username: "", shopName: "", shopId: "", address: "", cellphone: "" } }
        this.handleNewProductModal = this.handleNewProductModal.bind(this)
        this.handleNewProduct = this.handleNewProduct.bind(this)
        this.handleUpdateProductModal = this.handleUpdateProductModal.bind(this)
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
        this.buildHeaders=this.buildHeaders.bind(this)
        this.handleDeleteItem=this.handleDeleteItem.bind(this)
    }

    componentDidMount() {
        
        axios.get(getUrl() + "/username", { headers: this.buildHeaders() })
            .then(res => {
                axios.get(getUrl() + "/storekeeper/" + res.data, { headers: this.buildHeaders() })
                    .then(res => {
                        var user = res.data
                        var tempProducts=[]
                        var tempUser = { username: user.email, shopName: user.shop.name, shopId: user.shop.id, address: user.shop.location, cellphone: user.cellphone }
                        user.shop.products.forEach(element => {
                            if(element!=null){
                                tempProducts.push(element)
                            }
                        });
                        this.setState({
                            items: tempProducts,
                            user: tempUser
                        });

                    })

            })
    }
    

    render() {
        console.log("isTendero");
        console.log(IsTendero());
        if(!IsTendero()){
            console.log("NO TENDERO");
            return <PlaceView />
        }
        return <div style={{ height: "100%", width: "100%", display: "flex", flexDirection: "row" }} >
            {
                <div>

                    <Modal open={this.state.openProductModal}
                        onClose={this.handleNewProductModal}
                    >
                        <ProductModal handleProduct={this.handleNewProduct} required={true} verb={"Añadir"} />
                    </Modal>

                    <Modal open={this.state.openUpdateModal}
                        onClose={this.handleUpdateProductModal}
                    >
                        <ProductModal handleProduct={this.handleUpdateProduct} required={false} verb={"Actualizar"} />
                    </Modal>
                    <DrawerLeft main={<ProductGrid products={this.state.items} handleUpdateProductModal={this.handleUpdateProductModal}  handleDeleteItem={this.handleDeleteItem} />}
                        user={this.state.user}
                        handleNewProductModal={this.handleNewProductModal}
                        handleRedirect={this.handleRedirect}
                        />
                </div>}
        </div>;
    }

    buildHeaders(){
        let headers={'Authorization':localStorage.getItem("token")}
        return headers
    }

    handleRedirect(pathToRedirect) {
        this.props.history.push(pathToRedirect)

    }
    handleNewProductModal() {
        this.setState(prevstate => ({
            openProductModal: !prevstate.openProductModal
        }))
    }
    handleUpdateProductModal(ind) {
        this.setState(prevstate => ({
            openUpdateModal: !prevstate.openUpdateModal,
            indexToUpdate: ind
        }))
    }

    handleUpload(image,uploadImage) {
        return new Promise((resolve, reject) => {
            if (image != null && uploadImage) {
                const uuid=uuidv4()
                const uploadTask = storage.ref(`images/${uuid+image.name}`).put(image);
                uploadTask.on(
                    "state_changed",
                    snapshot => { },
                    error => { console.log(error) },
                    () => {
                        storage
                            .ref("images")
                            .child(uuid+image.name)
                            .getDownloadURL()
                            .then(url => {
                                resolve(url)
                            })
                    }
                )

            }
            else if(image!=null && !uploadImage){
                resolve(image)
            }
            else{
                resolve("http://via.placeholder.com/350x150")//pendiente imagen por defecto
            }

        })

    }

    handleNewProduct(product) {
        this.handleUpload(product.image,product.uploadedImage).then((url) => {
            product.image = url
            delete product.uploadedImage
            axios.post(getUrl() + "/products/" + this.state.user.shopId, product, { headers: this.buildHeaders() }).
                then(res => {
                    product.id = res.data.id
                    this.setState(prevState => ({
                        items: prevState.items.concat(product)
                    }));
                })
            this.setState({
                openProductModal: false
            })
        })


    }

    handleUpdateProduct(product) {
        var image=product.image!=null?product.image:this.state.items[this.state.indexToUpdate].image
        var id = this.state.items[this.state.indexToUpdate].id;

        this.handleUpload(image,product.uploadedImage).then((url)=>{
            product.image = url
            delete product.uploadedImage
            axios.patch(getUrl() + "/products/" + id, product, { headers: this.buildHeaders() }).
            then(res => {
                let tempItems = [...this.state.items];
                tempItems[this.state.indexToUpdate] = res.data;
                this.setState({
                    items: tempItems
                })
            })
        this.setState({
            openUpdateModal: false
        })
        })
    }
    handleDeleteItem(index){
        console.log(index)
        var id = this.state.items[index].id;
        axios.delete(getUrl()+"/products/"+id,{headers:this.buildHeaders()}).
        then(res => {
            let tempItems = [...this.state.items];
            tempItems.splice(index,1)
            this.setState({
                items: tempItems
            })
        })
    }

}
export default withRouter(SellerDashboard);
