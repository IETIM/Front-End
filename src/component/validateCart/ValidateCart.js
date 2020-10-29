import React from 'react';
import AppBar from "../appbar/AppBar";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PaymentForm from './PaymentForm';
import axios from 'axios';

const useStylesAlt = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }  
}));

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
          <Button onClick={() => props.handleClose(), () => props.deleteProduct(props.id)} color="secondary" autoFocus>
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function NestedGrid(props) {
    const classes2 = useStylesAlt();

    function RecipeReviewCard(props) {
      const classes = useStyles();
      const [open, setOpen] = React.useState(false);
      const handleClickOpen = () => {
        setOpen(true);
      };

      const handleClose = () => {
        setOpen(false);
      };

      let dynamicImage;
      if (props.ruta != null) {
        const images = require.context('./static/images', true);
        dynamicImage = images(`./${props.ruta}`);
      }
            
      return (
        
        <Grid item xs={2}>
        <Card className={classes.root}>
          <CardHeader    
            action={
              <IconButton aria-label="settings">
                <CloseIcon onClick = {handleClickOpen}/>
              </IconButton>
                
            }            
            title= {props.name}
            subheader= {"$ " + props.format(props.price)}
          />
          <AlertDialog open ={open} handleClickOpen = {handleClickOpen} handleClose = {handleClose}
            deleteProduct = {props.deleteProduct} id = {props.id} nameProduct = {props.name} allProducts = {false}/>
          <CardMedia
            className={classes.media}
            image={dynamicImage}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>               
        </Card>
        </Grid>
      );
    }
  
    return (
      <div className={classes2.root}>
        <Grid container spacing={0}>
          <Grid container item xs={12} spacing={3}>
            {props.items.map((item, index) => 
              
              <RecipeReviewCard 
                    id = {item.id}
                    key = {item.order.name + "_" + index} 
                    name = {item.order.name} 
                    price = {item.order.price} 
                    description = {item.order.description} 
                    ruta = {item.order.ruta}
                    deleteProduct = {props.deleteProduct}
                    format = {props.format}/>
            )}
          </Grid>
        </Grid>
      </div>
    );
}

export default class ValidateCart extends React.Component {

    constructor(props) {
        super(props);
        var productsInitial = [{id: 1, name:"Limón",price:"1000",description:"Cuatro limones.", ruta: "limon.jpg"},
        {id: 2, name:"Arroz",price:"10800",description:"Cinco kilos de arroz ROA.", ruta: "arroz.jpg"},
        {id: 3, name:"Huevos",price:"2000",description:"Una docena de huevos.", ruta: "huevos.jpg"},
        {id: 4, name:"Chocolate",price:"4000",description:"Barra de chocolate Hershey's", ruta: "chocolate.jpg"},
        {id: 5, name:"Cafe",price:"4300",description:"Cinco libras de café sello rojo.", ruta: "cafe.jpg"},
        {id: 6, name:"Zapatos",price:"70000",description:"Zapatos formales para hombre.", ruta: "zapatosHombre.jpg"},
        {id: 7, name:"Paella",price:"14000",description:"Paella de tamaño grande.", ruta: "paella.jpg"},
        {id: 8, name:"Lentejas",price:"3000",description:"Una libra de lentejas. ", ruta: "lentejas.png"}];
        this.state = {productsCart: [], orders: [], isChange: false};        
        this.deleteProduct = this.deleteProduct.bind(this);
        this.calculatePrice = this.calculatePrice.bind(this);
    }

    updateData = (productsCart) => {
      this.setState({
        productsCart: productsCart
      })
      this.loadOrder();
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

    loadOrder = () => {
        var orders = [];
        for (var i = 0; i < this.state.productsCart.length; i++) {
          let currentShop = this.state.productsCart[i].shop;         
          let currentOrder = this.state.productsCart[i].order;          
          let flag = false;
          for (var j = 0; j < orders.length; j++) {
            if (orders[j].shop == currentShop) {
              let products = orders[j].purchases;
              products.push(currentOrder);
              orders[j].purchases = products;
              flag = true;
              break;
            }
          }
          if (flag) continue;
          let firtsProduct = [currentOrder];
          var order = {
            shop: currentShop,
            purchases: firtsProduct,
          }; 
          orders.push(order);
        }
        this.setState({
          orders: orders
        });
        console.log("ESTATE VALIDATE")
        console.log(this.state)
    }

    deleteProduct(id) {
      var request = window.indexedDB.open("pedidos", 1);
        var showData = this.loadData;
        request.onsuccess = (up) => {
            request.result.transaction(["pedidos"], "readwrite").objectStore("pedidos").delete(id);
            showData();
        }
        request.onupgradeneeded = (event) => {
            var dbtest = event.target.result;
            var auto = dbtest.createObjectStore("pedidos", {keyPath: "id", autoIncrement: true});
        }
        this.setIsChange();
    }

    setIsChange = () => {
      this.setState({
        isChange: !this.state.isChange
      })
    }

    calculatePrice() {
      var totalPrice = 0;
      console.log("-------------------------------------------------")
      console.log(this.state)
      console.log("-------------------------------------------------")
      this.state.productsCart.map((product) => {
        totalPrice += parseInt(product.order.price) * parseInt(product.order.quantity);
      });
      return this.format(totalPrice .toString());
    }


    format = (input) => {
      var num = input.replace(/\./g,'');
      num = num.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
      num = num.split('').reverse().join('').replace(/^[\.]/,'');    
      return num;
    }

    handleSubmitPay = (orders) => {
      var responses = []
      for (var i = 0; i < orders.length; i++) {
        axios.post('https://ieti-project.firebaseio.com/orders/new', 
            orders[i],
            {
             headers: { "Content-Type": "application/json" }
            })
             .then(response => { 
                 responses.push(response);
             })
             .catch(e => {
                alert("Ha ocurrido un problema al intentar realizar el pago, por favor intente nuevamente!");
             });
      }
    }

    componentDidMount() {
      this.loadData();        
    }

    modifyElement = () => {
      var update = this.loadData;
      update();
    }

    render(){
        console.log("-----------------VALIDATE CART NEW PRODUCTS---------------------");
        console.log(this.state)
        console.log("-----------------VALIDATE CART NEW PRODUCTS---------------------");
        return (
            <div>
                <AppBar 
                  modify = {this.modifyElement}
                  isChange = {this.state.isChange}
                  setIsChange =  {this.setIsChange}
                  />                
                <div style = {{height: '80px', width: '100%'}}></div>
                <div style = {{textAlign: 'center'}}>
                    <header>
                        <h1 style = {{fontSize: "40px"}}> Validar Productos </h1>
                    </header>
                </div>
                <div style = {{paddingLeft: '50px', paddingRight: '50px'}}>
                  <NestedGrid format = {this.format} items = {this.state.productsCart} deleteProduct = {this.deleteProduct}></NestedGrid>
                
                  <br></br><br></br><br></br>
            
                </div>
            
                <PaymentForm orders = {this.state.orders} price = {this.calculatePrice()} format = {this.format}/>
                
            </div>
        );
    }
}



