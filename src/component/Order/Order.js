import React from 'react';
import {Toolbar,IconButton,Typography,MenuIcon, Grid} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {ImageSearch} from '@material-ui/icons';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
import StopIcon from '@material-ui/icons/Stop';
import AppBar from '../appbar/AppBar';
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, animateScroll as scroll } from "react-scroll";
import { withStyles,useTheme} from "@material-ui/core/styles";
import DefaultView from './DefaultView';
import Atendido from './Atendido';
import Faltan from './Faltan';
import Axios from 'axios';

const drawerWidth = 240;

const url = "https://ieti-deep-backend.herokuapp.com";

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

class Order extends React.Component{
    constructor(props){
        super(props);
        this.state = {at:false
            ,falta:false
            ,orders:[{id:0,items:[{id:7,name:'Hamburguesa',price:30,number:1},{id:8,name:'papas',price:50,number:1},{id:9,name:'Gaseosa',price:20,numbre:1}],status:'ready',date:'20-08-2020'},{id:1,items:[{id:7,name:'Hamburguesa',price:30,number:1},{id:8,name:'papas',price:50,number:1},{id:9,name:'Gaseosa',price:20,number:1}],date:'20-08-2020',status:'complete'}]};

        this.complete = this.complete.bind(this);
    }

    complete(order){
        for(var i=0;i<this.state.orders.length;i++){
            if(this.state.orders[i].id==order.id){
                console.log("update");
                this.state.orders[i].status = "complete";
            }
        }
        this.setState({orders:this.state.orders});
    }

    render(){
        const { window } = this.props;
        const  {classes}  = this.props;
        console.log("clases::........");
        console.log(this.classes);
        const handleDrawerToggle = () => {
          this.setState({ mobileOpen: !this.state.mobileOpen });
        };
        const cat = ["Droguerias","Supermercados","Cafeterias"]
        const drawer = (
            <div>
              <div style = {{height: '30px', width: '100%'}}></div>
              <div className={classes.toolbar} />
              <Divider/>
              <center><Typography gutterBottom variant="h5" component="h2">Pedidos</Typography></center>
              <Divider />
              <List>
              <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  <ListItem button onClick={()=> this.setState({at:false,falta:true})}>
                    <ListItemIcon>
                      <StopIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Pendientes"}/>
                    
                  </ListItem>
                  </Link>
                  <Link
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  <ListItem button onClick={()=> this.setState({at:true,falta:false})}>
                    <ListItemIcon>
                      <StopIcon/>
                    </ListItemIcon>
                    <ListItemText primary={"Atendidos"}/>
                    
                  </ListItem>
                  </Link>
              </List>
              <Divider />
            </div>
          );
      
          const container =
            window !== undefined ? () => window().document.body : undefined;      
        document.title="Ieti deep | Stores"
        return(
            <div className={classes.root}>
            <AppBar 
                 sumAmount = {this.sumAmount}
                 removeProduct = {this.removeProduct}
                 productsCart = {this.state.productsCart} 
                 removeAllProductsCart = {this.removeAllProductsCart}
             />
   
          <div style = {{height: '7  0px'}}></div>
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
             {!this.state.at && !this.state.falta && <DefaultView/>}
             {this.state.at && <Atendido orders={this.state.orders} />}
             {this.state.falta && <Faltan updateOrden={this.complete} orders={this.state.orders}/>}
           </main>
         </div>
        )

    }

    componentWillMount(){

      Axios.get(url+"/orders/"+this.props.name+"/orders",{"headers":{
        Authorization:localStorage.getItem("token")
      }})
      .then((data)=>this.setState({orders:data}))
      .catch((e)=>alert("No se pudo cargar los datos"));
    }
}
export default withStyles(useStyles)(Order);

/*

 <div style={{width:'100%',height:'80px'}}/>
        <div style={{width:'100%',height:'calc(100% - 80px)' ,display:'flex',flexDirection:'row'}}>
            <div style={{width:'25%',height:'100%'}}><center><ListAltIcon style={{fontSize:'100'}}/></center>
            <br></br>
            <center>
                <Button style={{width:'90%',borderBottom:'1px solid black'}} onClick={()=>{
                    setAt(true); setFalta(false);}}>Pedidos atendidos</Button>
                <Button onClick={()=>{setAt(false); setFalta(true);}} style={{width:'90%',borderBottom:'1px solid black'}}>Pedidos faltantes</Button>    
            </center>
            </div>
            <div style={{width:'75%',height:'100%'}}>
                {!at && !falta && <DefaultView/>}
                {at && <Atendido orders={orders} />}
                {falta && <Faltan updateOrden={complete} orders={orders}/>}
            </div>
        </div>
*/

