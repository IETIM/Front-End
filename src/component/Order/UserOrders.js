import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
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

import { getUrl } from "../../vars";


const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'tienda', headerName: 'Tienda', width: 200 },
  { field: 'valortotal', headerName: 'Valor Total', width: 200 },
];

const rows = [
  { id: 1, tienda: 'Snow', valortotal: 4522 },
  { id: 2, tienda: 'Snow', valortotal: 4522 },
  { id: 3, tienda: 'Snow', valortotal: 4522 },
  { id: 4, tienda: 'Snow', valortotal: 4522 },
  { id: 5, tienda: 'Snow', valortotal: 4522 },
  { id: 6, tienda: 'Snow', valortotal: 4522 },
  { id: 7, tienda: 'Snow', valortotal: 4522 },
  { id: 8, tienda: 'Snow', valortotal: 4522 },
  { id: 9, tienda: 'Snow', valortotal: 4522 },
];



export class DataTable extends React.Component {
    render(){
        return (
            <div style={{ height: 400, width: '100%'}}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
              
            </div>
          );
    }
  
}


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

export class UserOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mobileOpen: false, productsCart: [],products:[] };
    console.log(props == undefined);
  }

  render() {
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
              {"Mis Ordenes"}
            </Typography>
          </center>
          <div style={{ height: 400, width: '70%',margin: "0 auto"}}>
              <DataGrid rows={rows} columns={columns} pageSize={5} />
              
            </div>
          {/* Aqui hay que poner la lista de product con los porps que son las categorias */}
        </main>
      </div>
    );
  }

  
}

export default withStyles(useStyles)(UserOrders);
