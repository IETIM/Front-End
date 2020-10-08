import React from 'react';
import { withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Hidden } from '@material-ui/core';
import RoomIcon from '@material-ui/icons/Room';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Avatar from '@material-ui/core/Avatar';
import logo from './../../logo.svg';
import {Redirect} from 'react-router-dom';


const drawerWidth = 240;

const useStyles =theme =>  ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
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

class DrawerLeft extends React.Component{
    constructor(props) {
        super(props);
        this.state={open : false}
        this.handleDrawer=this.handleDrawer.bind(this)
    }



    render(){

      if (!localStorage.getItem("IsLoggedIn")){
        return <Redirect to="/login"> </Redirect>
      }

      const { window }=this.props;
      const { classes } = this.props;
      const user=this.props.user
      
      const drawer = (
        <div>
          <div className={classes.toolbar} />
          <Divider />
          <List>
              <ListItem>
                <ListItemIcon><Avatar alt="Nombre tendero" src={logo} /></ListItemIcon>
                <ListItemText primary={user.username} />
              </ListItem>
              <ListItem>

              <ListItemIcon><StorefrontIcon/></ListItemIcon>
                <ListItemText primary={user.shopName} />
              </ListItem>
              <ListItem>
              <ListItemIcon><RoomIcon/></ListItemIcon>
                <ListItemText primary={user.address} />
              </ListItem>
              <ListItem>
              <ListItemIcon><WhatsAppIcon/></ListItemIcon>
                <ListItemText primary={user.cellphone} />
              </ListItem>
          </List>
          <Divider />
          <List>
              <ListItem button key={"Update"} onClick={()=>{this.props.handleRedirect("/userprofile")}}>
                <ListItemIcon><SettingsApplicationsIcon/> </ListItemIcon>
                <ListItemText primary={"Actualizar datos"} />
              </ListItem>
              <ListItem button key={"Pedidos"} onClick={()=>{this.props.handleRedirect("/orders")}}>
                <ListItemIcon><ShoppingCartIcon/> </ListItemIcon>
                <ListItemText primary={"Ver pedidos"} />
              </ListItem>
              <ListItem button key={"Añadir producto"} onClick={this.props.handleNewProductModal} >
                <ListItemIcon><AddBoxIcon/> </ListItemIcon>
                <ListItemText primary={"Añadir producto"} />
              </ListItem>
          </List>
        </div>
      );
      const container = window !== undefined ? () => window().document.body : undefined;

        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={()=> this.handleDrawer()}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  Estos son tus productos 
                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
              {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={this.props.theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.open}
                  onClose={()=> this.handleDrawer()}
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
              {this.props.main}
            </main>
          </div>
        );



    }
    handleDrawer(e) {
      this.setState({
          open: !this.state.open
      });
  }
}

export default withStyles(useStyles, { withTheme: true })(DrawerLeft);
