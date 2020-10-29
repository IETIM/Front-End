import React , {useState} from 'react';
import * as GiIcons from 'react-icons/gi';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './ShoppingCart.css';
import { IconContext } from 'react-icons';
import Button from '@material-ui/core/Button';
import * as FaIcons from 'react-icons/fa';
import Divider from '@material-ui/core/Divider';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AlertDialog(props) {  
    var text = !props.allProducts ? 
        "¿Está seguro que desea eliminar el producto " + "\"" + props.nameProduct + "\"?": 
        "¿Está seguro que desea eliminar todos los productos?";

    return (
        <div>      
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"¿Eliminar producto?"}</DialogTitle>
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
                {text}
                <br></br>
                Este cambio no podrá ser anulado.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={() => props.handleClose()} color="primary">
                Cancelar
            </Button>
            <Button onClick={() => props.deleteProduct(props.id)} color="secondary" autoFocus>
                Eliminar
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
}

export default class ShoppingCart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {productsCart: []};        
    }
    
    
    updateData = (productsCart) => {
        this.setState({
            productsCart: productsCart
        })
    }

    loadData = () => {
        var request = window.indexedDB.open("pedidos", 1);        
        var update = this.updateData;
        request.onsuccess = (up) => {
            var cur = request.result.transaction(["pedidos"],"readwrite").objectStore("pedidos").openCursor();
            var li = [];
            cur.onsuccess = function(evt) {                    
                var cursor = evt.target.result;
                console.log("cursor");
                console.log(cursor);
                if (cursor) {
                    li.push(cursor.value);
                    console.log("add");
                    cursor.continue();
                } else {
                    update(li);
                }
            };
        }

        request.onupgradeneeded = (event) => {
            var dbtest = event.target.result;
            var auto = dbtest.createObjectStore("pedidos",{keyPath: "id", autoIncrement: true});
        }        
    }

    removeProduct = (id) => {        
        var request = window.indexedDB.open("pedidos", 1);
        var showData = this.loadData;
        request.onsuccess = (up) => {
            //console.log("Delete element");
            request.result.transaction(["pedidos"], "readwrite").objectStore("pedidos").delete(id);
            showData();
        }
        request.onupgradeneeded = (event) => {
            //console.log("Upgraded")
            var dbtest = event.target.result;
            var auto = dbtest.createObjectStore("pedidos", {keyPath: "id", autoIncrement: true});
        }    
      }
    
    
    
    
    removeAllProductsCart = () => {
        var request = window.indexedDB.open("pedidos", 1);
        var showData = this.loadData;
        request.onsuccess = (up) => {
            //console.log("Add element");
            request.result.transaction(["pedidos"], "readwrite").objectStore("pedidos").clear();
            showData();
        }
        request.onupgradeneeded = (event) => {
            //console.log("Upgraded")
            var dbtest = event.target.result;
            var auto = dbtest.createObjectStore("pedidos", {keyPath: "id", autoIncrement: true});
        }
    }

    sumAmount = (id, num) => {
    var request = window.indexedDB.open("pedidos", 1);
        var update = this.loadData;
        request.onsuccess = (up) => {
            var cur = request.result.transaction(["pedidos"],"readwrite").objectStore("pedidos").openCursor();
            var li = [];
            cur.onsuccess = function(evt) {                    
                var cursor = evt.target.result;
                if (cursor && cursor.value.id != id) {                                       
                    cursor.continue();
                } else if (cursor && cursor.value.id == id) {
                    console.log("UPDATE DATA");
                    const updateData = cursor.value;
                    console.log(updateData)
                    if (updateData.order.quantity + num <= 0) return;
                    updateData.order.quantity += num;                    
                    cursor.update(updateData)
                    update();
                }                       
            };

        }
        request.onupgradeneeded = (event) => {
            //console.log("Upgraded")
            var dbtest = event.target.result;
            var auto = dbtest.createObjectStore("pedidos",{keyPath: "id", autoIncrement: true});
        }
    }
    
    render() {
        if (!(this.props.sumAmount != null)) {
            return(
                <SidebarPage 
                            sumAmount = {this.sumAmount}
                            removeProduct = {this.removeProduct}
                            removeAllProductsCart = {this.removeAllProductsCart}
                            productsCart = {this.state.productsCart}
                            modify = {this.props.modify}
                            modifyElement = {this.modifyElement}
                            isChange = {this.props.isChange}
                            setIsChange = {this.props.setIsChange}/>
            );    
        }
        
        return(
            <SidebarPage 
                        sumAmount = {this.props.sumAmount}
                        removeProduct = {this.props.removeProduct}
                        removeAllProductsCart = {this.props.removeAllProductsCart}
                        productsCart = {this.props.productsCart}
                        modify = {this.props.modify}
                        modifyElement = {this.modifyElement}
                        isChange = {this.props.isChange}
                        setIsChange = {this.props.setIsChange}/>
        );
    }

    componentDidMount() {
        this.loadData();
    }

    modifyElement = () => {
        var update = this.loadData;
        update();
    }

}

function SidebarPage (props){
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    console.log("PROPS SHOPPING CART INI")
    console.log(props);
    console.log("PROPS SHOPPING CART FIN")
    const executeAction = () => {
        if (props.modify != null) {
            props.modify();
        }
    }
    if (props.isChange) {        
        props.modifyElement();
        props.setIsChange();
    }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (type, id, name) => {        
        setOpen(true);
        setAllProducts(type);
        setPropsProducts({...propsProducts, id: id, name: name});
    };
    const [allProducts, setAllProducts] = React.useState(false);
    const [propsProducts, setPropsProducts] = React.useState({
        id: -40,
        name: "nothing"
    });
    const handleClose = () => {
        setOpen(false);
    };
    
    const confirmDeletion = (id) => {
        if (!allProducts) {
            props.removeProduct(id)
        } else if (allProducts) {
            props.removeAllProductsCart()
        }
        handleClose();
        if (props.modify != null) {
            props.modify();
        }
    }
    console.log("PROPORPSAORPOARPAORPAOSPROAPROPROPRO")
    console.log(propsProducts)
    console.log("PROPORPSAORPOARPAORPAOSPROAPROPROPRO")
    return( 
            <>
                <IconContext.Provider value = {{ color: '#fff' }}>
                    <Link to = "#" className = "menu-barsV2" style = {{marginLeft: 'calc(100% - 8rem)', fontSize: '2.3rem'}}>
                        <GiIcons.GiShoppingCart onClick = {showSidebar}/>
                    </Link>

                    <nav className = {sidebar ? 'nav-menuV2 active': 'nav-menuV2'} style = {{overflow: 'scroll'}}>
                        <ul className = 'nav-menu-itemsV2'>
                            <li className = "navbar-toggleV2">
                                <Link to = "#" className = "menu-barsV2" style = {{marginLeft: 'calc(100% - 4rem)'}}>
                                    <AiIcons.AiOutlineClose onClick = {showSidebar}/>
                                </Link>
                            </li>                            
                            {props.productsCart.map((item, index) => {
                                return (
                                    <div>
                                        
                                        <div key = {item.order.name + "_" + index} className = "nav-textV1">                                        
                                                <FaIcons.FaCartPlus />
                                                <span style = {{color: 'white'}}> {item.order.name} </span>
                                                <span style = {{float: 'right', color: 'white'}}> $ {item.order.price * item.order.quantity} </span>
                                                
                                                <div style = {{position: 'absolute', right: '-70px'}}>
                                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group" 
                                                    style = {{width: '10%'}}>
                                                    <Button> 
                                                        {item.order.quantity <= 1 ? 
                                                             <DeleteIcon onClick = {() => handleClickOpen(false, item.id, item.order.name)}/> 
                                                            :  <RemoveIcon onClick = {() => executeAction(props.sumAmount(item.id, -1))}/>}
                                                    </Button>
                                                    <Button>{item.order.quantity}</Button>
                                                    <Button><AddIcon onClick = {() => executeAction(props.sumAmount(item.id, 1))}/></Button>
                                                </ButtonGroup>
                                                </div>                                                
                                        </div>
                                        <Divider style = {{background: 'white'}}/>
                                    </div>
                                );
                            })}
                            <AlertDialog open ={open} handleClickOpen = {handleClickOpen} handleClose = {handleClose}
                                                deleteProduct = {confirmDeletion} id = {propsProducts.id} allProducts = {allProducts}
                                                nameProduct = {propsProducts.name}/>
                            
                            {/*<button style = {{height: '40px', width: '100%', borderRadius: '4px', marginTop: '100%', position: 'inline-block'}}>
                            Validar 
                        </button> */}
                            <Button variant="contained" color="secondary" 
                                style = {{height: '40px', width: '50%', borderRadius: '4px', position: 'inline-block'}}
                                onClick = {() => handleClickOpen(true, -40, "Nothing")}>
                            Vaciar Carrito
                            </Button>
                            <Button href = "/validateCart"variant="contained" color="primary" style = {{height: '40px', width: '50%', borderRadius: '4px', position: 'inline-block'}}>
                            Validar Carrito
                            </Button>
                        </ul>                                                             
                    </nav>
                    
                </IconContext.Provider> 
                      
                            <br></br>                        
               
            </>
    );    
    
}