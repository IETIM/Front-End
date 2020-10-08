import React from "react";
import AppBar from "../appbar/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link, animateScroll as scroll } from "react-scroll";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { Todo } from "../todo/Todo";
import { withStyles } from "@material-ui/core/styles";
import { ListProduct } from "./ListProduct";
import { getUrl } from "../../vars";

const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
});

export class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false, productsCart: [],products:[] };
    console.log(props == undefined);
    this.addProduc = this.addProduc.bind(this);
    this.removeAllProductsCart = this.removeAllProductsCart.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.sumAmount = this.sumAmount.bind(this);
  }

  updateData = (productsCart) => {
    this.setState({
      productsCart: productsCart,
    });
  };

  loadData = () => {
    var request = window.indexedDB.open("pedidos", 1);
    var update = this.updateData;
    request.onsuccess = (up) => {
      var cur = request.result
        .transaction(["pedidos"], "readwrite")
        .objectStore("pedidos")
        .openCursor();
      var li = [];
      cur.onsuccess = function (evt) {
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
    };

    request.onupgradeneeded = (event) => {
      //console.log("Upgraded")
      var dbtest = event.target.result;
      var auto = dbtest.createObjectStore("pedidos", {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  };

  addProduc(name, price) {
    /*
    var listTemp = this.state.productsCart;
    listTemp.push({"id": listTemp.length + 1, "name": name, "price": price, "amount": 1});
    this.setState({
      productsCart: listTemp
    })*/

    const tempProduct = {
      name: name,
      price: price,
      amount: 1,
      shop: this.props.store,
    };
    var request = window.indexedDB.open("pedidos", 1);
    var showData = this.loadData;
    request.onsuccess = (up) => {
      //console.log("Add element");
      request.result
        .transaction(["pedidos"], "readwrite")
        .objectStore("pedidos")
        .add(tempProduct);
      showData();
    };
    request.onupgradeneeded = (event) => {
      //console.log("Upgraded")
      var dbtest = event.target.result;
      var auto = dbtest.createObjectStore("pedidos", {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  }

  removeProduct(id) {
    /*
    var listTemp = this.state.productsCart;
    for (var i = 0; i < listTemp.length; i++) {
      const item = listTemp[i];
      if (item.id == id) {
        listTemp.splice(i, 1);
        break;
      }
    }
    this.setState({
      productsCart: listTemp
    })*/
    var request = window.indexedDB.open("pedidos", 1);
    var showData = this.loadData;
    request.onsuccess = (up) => {
      //console.log("Delete element");
      request.result
        .transaction(["pedidos"], "readwrite")
        .objectStore("pedidos")
        .delete(id);
      showData();
    };
    request.onupgradeneeded = (event) => {
      //console.log("Upgraded")
      var dbtest = event.target.result;
      var auto = dbtest.createObjectStore("pedidos", {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  }

  removeAllProductsCart() {
    var request = window.indexedDB.open("pedidos", 1);
    var showData = this.loadData;
    request.onsuccess = (up) => {
      //console.log("Add element");
      request.result
        .transaction(["pedidos"], "readwrite")
        .objectStore("pedidos")
        .clear();
      showData();
    };
    request.onupgradeneeded = (event) => {
      //console.log("Upgraded")
      var dbtest = event.target.result;
      var auto = dbtest.createObjectStore("pedidos", {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  }

  sumAmount(id, num) {
    /*var listTemp = this.state.productsCart;
    for (var i = 0; i < listTemp.length; i++) {
      const item = listTemp[i];
      if (item.id == id) {
        item.amount += num;
        break;
      }
    }
    this.setState({
      productsCart: listTemp
    })*/

    var request = window.indexedDB.open("pedidos", 1);
    var update = this.loadData;
    request.onsuccess = (up) => {
      var cur = request.result
        .transaction(["pedidos"], "readwrite")
        .objectStore("pedidos")
        .openCursor();
      var li = [];
      cur.onsuccess = function (evt) {
        var cursor = evt.target.result;
        if (cursor && cursor.value.id != id) {
          cursor.continue();
        } else if (cursor && cursor.value.id == id) {
          console.log("UPDATE DATA");
          const updateData = cursor.value;
          console.log(updateData);
          updateData.amount += num;
          cursor.update(updateData);
          update();
        }
      };
    };
    request.onupgradeneeded = (event) => {
      //console.log("Upgraded")
      var dbtest = event.target.result;
      var auto = dbtest.createObjectStore("pedidos", {
        keyPath: "id",
        autoIncrement: true,
      });
    };
  }

  render() {
    /*const testList = [
      {
        name: "food",
        products: [
          { name: "Limón", price: "2.000", description: "_" },
          { name: "Pasta", price: "2.000", description: "_" },
          { name: "Arroz", price: "2.000", description: "_" },
          { name: "Salchicha", price: "2.000", description: "_" },
          { name: "Platano", price: "2.000", description: "_" },
          { name: "Papa", price: "2.000", description: "_" },
          { name: "Huevos", price: "2.000", description: "_" },
          { name: "Chicharron", price: "2.000", description: "_" },
          { name: "Cafe", price: "2.000", description: "_" },
          { name: "Lentejas", price: "2.000", description: "_" },
        ],
      },
      {
        name: "cars",
        products: [
          { name: "Chevrolet x2", price: "2.000", description: "_" },
          { name: "itemb", price: "2.000", description: "_" },
        ],
      },
      {
        name: "lapices",
        products: [
          { name: "Lápiz #2", price: "2.000", description: "_" },
          { name: "itemb", price: "2.000", description: "_" },
        ],
      },
    ];
    */
   const testList = this.state.products;
    const { window } = this.props;
    const { classes } = this.props;
    console.log("clases::........");
    console.log(this.classes);
    const handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    document.title = "Ieti deep | " + this.props.store;

    const drawer = (
      <div>
        <div style={{ height: "30px", width: "100%" }}></div>
        <div className={classes.toolbar} />
        <Divider />
        <center>
          <Typography gutterBottom variant="h5" component="h2">
            Categorias
          </Typography>
        </center>
        <Divider />
        <List>
          {testList.map((categories) => (
            <Link
              activeClass="active"
              to={categories.name}
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              <ListItem button>
                <ListItemIcon>
                  <LocalOfferIcon />
                </ListItemIcon>
                <ListItemText primary={categories.name.toUpperCase()} />
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
      </div>
    );

    const container =
      window !== undefined ? () => window().document.body : undefined;

    return (
      <div className={classes.root}>
        <AppBar
          sumAmount={this.sumAmount}
          removeProduct={this.removeProduct}
          productsCart={this.state.productsCart}
          removeAllProductsCart={this.removeAllProductsCart}
        />

        <div style={{ height: "7  0px" }}></div>
        <CssBaseline />
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              //anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <center>
            <Typography gutterBottom variant="h3" component="h2">
              {this.props.store.toUpperCase()}
            </Typography>
          </center>
          <ListProduct categories={testList} addProduc={this.addProduc} />
          {/* Aqui hay que poner la lista de product con los porps que son las categorias */}
        </main>
      </div>
    );
  }

  componentDidMount() {
    this.loadData();
    let url = getUrl();
    const headers = {
      Authorization:
        "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZW5kZXJvQG1haWwuY29tIiwicm9sZXMiOlt7ImF1dGhvcml0eSI6IlJPTEVfVEVOREVSTyJ9XSwiZXhwIjoxNjAyMTg0Mjg5LCJpYXQiOjE2MDIxODA2ODl9.NqP9DvQIEivEjLGZQfESTyC_Gnr-MmME3LSr68hRQDeODWX7CCuGOYTCs_jqkal4mJZ9bxU7FLmp_e2AAv3MDw",
    };
    fetch(url + "/products/5f7e735312de4a10fbce30c6", {
      headers: headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        let prod = [];
        let cat = [];
        data.forEach(function (p) {
          if (!cat.includes(p.category)) {
            console.log("ADDING CATEGORY" + p.category);
            cat.push(p.category);
            prod.push({ name: p.category, products: [{name:p.name,price:p.price,description:p.description}] });
          } else {
            var item = null;
            console.log("PRODUCTOS!");
            console.log(prod);
            for (let i = 0; i <= prod.length; i++) {
              if (prod[i].name === p.category) {
                //Aqui seguiria iterando, debo ocuparme de ello luego
                prod[i].products.push({
                  name: p.name,
                  price: p.price,
                  description: p.description,
                });
                break;
              }
            }
          }
        });
        console.log(prod);
        this.setState({products:prod});
      });
  }
}

export default withStyles(useStyles)(Catalog);
