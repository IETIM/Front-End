import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import AppBar from "../appbar/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import { Link, animateScroll as scroll } from "react-scroll";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import { withStyles } from "@material-ui/core/styles";

import { getUrl } from "../../vars";


const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'tienda', headerName: 'Tienda', width: 200 },
  { field: 'valortotal', headerName: 'Valor Total', width: 200 },
  { field: 'fecha', headerName: 'Fecha', width: 200 },
  { field: 'estado', headerName: 'Estado', width: 200 }
];

const rows = [
  { id: 1, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado" },
  { id: 2, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
  { id: 3, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
  { id: 4, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
  { id: 5, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
  { id: 6, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
  { id: 7, tienda: 'Snow', valortotal: 4522 ,fecha:"2020-01-01",estado:"completado" },
  { id: 8, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
  { id: 9, tienda: 'Snow', valortotal: 4522,fecha:"2020-01-01",estado:"completado"  },
];

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
    this.state = { mobileOpen: false, redirect:false };
    console.log(props == undefined);
  }

  componentDidMount(){
      this.getMyOrders().then(() => this.setState({redirect:true}));
    
  }

    parseJwt (token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
};

  getMyOrders(){
    let url = getUrl();
    let token = localStorage.getItem("token");
    const headers = {
      Authorization:
        token,
    };
    let user = this.parseJwt(token);
    
    let a = new Promise((resolve,reject) => {
        fetch(url + "/orders/user/"+user.sub, {
            headers: headers,
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              rows = {id:data.id,tienda:data.shop,valortotal:data.total,fecha:data.date}
              resolve();
            });
    });
    return a;

  }

  render() {
   const testList = this.state.products;
    const { window } = this.props;
    const { classes } = this.props;
    console.log(this.classes);
    const handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };
    document.title = "Ieti deep | Mis productos";

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
      
    if (this.state.redirect){
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
              
              <main className={classes.content}>
                <div className={classes.toolbar} />
                <center>
                  <Typography gutterBottom variant="h3" component="h2">
                    {"Mis Ordenes"}
                  </Typography>
                </center>
                <div style={{ height: 400, width: '80%',margin: "0 auto"}}>
                    <DataGrid rows={rows} columns={columns} pageSize={5} />
                    
                  </div>
              </main>
            </div>
          );
    }
    else{return(<h1>Cargando Data</h1>)}
    
  }

  
}

export default withStyles(useStyles)(UserOrders);
