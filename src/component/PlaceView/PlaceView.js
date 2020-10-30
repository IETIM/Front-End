import React from 'react';
import MapPlace from './Map';
import {Toolbar,IconButton,Typography,MenuIcon, Grid} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {ImageSearch} from '@material-ui/icons';
import CategoryView from './CategoryView';
import ItemsView from './ItemsView';
import ViewHeadlineIcon from '@material-ui/icons/ViewHeadline';
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
import MailIcon from "@material-ui/icons/Mail";
import { Link, animateScroll as scroll } from "react-scroll";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import { Todo } from "../todo/Todo";
import { withStyles,useTheme} from "@material-ui/core/styles";
import Map from './Map';
import Axios from 'axios';
import { getUrl } from '../../vars';

const url = getUrl();

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

class PlaceView extends React.Component{
    constructor(props){
        super(props);
        this.state = {funUpdate:null,categories:[]};
        this.setFunUpdate = this.setFunUpdate.bind(this);
        this.setCategory = this.setCategory.bind(this);
    }

    setCategory(category){
        console.log("category ");
        this.state.funUpdate(category);
    }
    setFunUpdate(fun){
        console.log("set function");
        this.state.funUpdate=fun;
        this.setState(this.state);
    }

    

    render(){
        const { window } = this.props;
        const  {classes}  = this.props;
        console.log("clases::........");
        console.log(this.classes);
        const handleDrawerToggle = () => {
          this.setState({ mobileOpen: !this.state.mobileOpen });
        };
        const cat = this.state.categories
        const drawer = (
            <div>
              <div style = {{height: '30px', width: '100%'}}></div>
              <div className={classes.toolbar} />
              <Divider/>
              <center><Typography gutterBottom variant="h5" component="h2">Categorias</Typography></center>
              <Divider />
              <List>
                {cat.map((categories) => (
                  <Link
                  activeClass="active"
                  to={categories}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                >
                  <ListItem button onClick={()=> this.setCategory(categories)}>
                    <ListItemIcon>
                      <ArrowForwardIosIcon/>
                    </ListItemIcon>
                    <ListItemText primary={categories.toUpperCase()}/>
                    
                  </ListItem>
                  </Link>
                ))}
              </List>
              <Divider />
              <br></br>
              <br></br>
              <Map></Map>
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
                <ItemsView setFun={(fun)=>this.setFunUpdate(fun)}></ItemsView>
           </main>
         </div>
        )

    }

    async componentDidMount(){
      const data = await Axios.get(url+"/shops");
      var dict = {};
      data.data.forEach(item=>dict[item.type]=1);
      this.setState({categories:Object.keys(dict)});
    }
}
export default withStyles(useStyles)(PlaceView);