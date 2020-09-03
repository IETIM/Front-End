import React from "react";
import AppBar from "@material-ui/core/AppBar";
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

import { Todo } from "../todo/Todo";
import { withStyles } from "@material-ui/core/styles";
import { ListProduct } from "./ListProduct";

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
    this.state = { mobileOpen: false };
    console.log(props == undefined);
  }

  render() {
    const testList =[{name:"food",products:[{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"},{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"},{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"},{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"},{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"}]},
                      {name:"cars",products:[{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"}]},
                      {name:"lapices",products:[{name:"itema",price:"2",description:"_"},{name:"itemb",price:"2",description:"_"}]}]
    const { window } = this.props;
    const { classes } = this.props;
    console.log("clases::........");
    console.log(this.classes);

    const handleDrawerToggle = () => {
      this.setState({ mobileOpen: !this.state.mobileOpen });
    };

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {testList.map((categories) => (
            <Link
            activeClass="active"
            to={categories.name}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <ListItem button>
              <ListItemIcon>
                {2% 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={categories.name} />
              
            </ListItem>
            </Link>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    const container =
      window !== undefined ? () => window().document.body : undefined;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
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
            <ListProduct categories={testList}/>
          {/* Aqui hay que poner la lista de product con los porps que son las categorias */}
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Catalog);
