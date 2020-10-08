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


const headers = {
    'Authorization': localStorage.getItem("token")
}


class SellerDashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = { openProductModal: false, openUpdateModal: false, indexToUpdate: "", items: [], user: { username: "",shopName:"" , shopId: "", address: "", cellphone: "" } }
        this.handleNewProductModal = this.handleNewProductModal.bind(this)
        this.handleNewProduct = this.handleNewProduct.bind(this)
        this.handleUpdateProductModal = this.handleUpdateProductModal.bind(this)
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
        this.handleRedirect = this.handleRedirect.bind(this)
    }

    componentDidMount() {
        axios.get(getUrl()+"/username", { headers: headers })
            .then(res => {
                axios.get(getUrl()+"/storekeeper/"+res.data,{ headers: headers })
                .then(res=>{
                    var user=res.data
                    var tempUser={username:user.email,shopName:user.shop.name,shopId:user.shop.id,address:user.shop.location,cellphone:user.cellphone}
                    this.setState({
                        items:user.shop.products,
                        user:tempUser
                    });

                })
                
            })
    }

    

    render() {
        console.log("isTendero");
        console.log(IsTendero());
        if(!IsTendero()){
            return <Redirect to="/"></Redirect>;
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
                    <DrawerLeft main={<ProductGrid products={this.state.items} handleUpdateProductModal={this.handleUpdateProductModal} />}
                        user={this.state.user}
                        handleNewProductModal={this.handleNewProductModal}
                        handleRedirect={this.handleRedirect} />
                </div>}
        </div>;
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

    handleNewProduct(product) {
        axios.post(getUrl() + "/products/" + this.state.user.shopId, product, { headers: headers }).
            then(res => {
                product.id = res.data.id
                this.setState(prevState => ({
                    items: prevState.items.concat(product)
                }));
            })
            this.setState({
                openProductModal: false
            })
    }

    handleUpdateProduct(product) {
        var id = this.state.items[this.state.indexToUpdate].id;
        axios.patch(getUrl() + "/products/" + id, product, { headers: headers }).
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
    }

}
export default withRouter(SellerDashboard);
