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
import Grid from "@material-ui/core/Grid";
import { Todo } from "../todo/Todo";
import { withStyles } from "@material-ui/core/styles";

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
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}  component="a" href="#lol">
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
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

          <Grid container spacing={1}>
            <Grid container spacing={1} direction="row" justify="center" alignItems="baseline">
            
              <Grid item xs="auto">
                <Todo
                  text="Prueba 0"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 1"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 2"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 3"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 4"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              
            <Grid item xs="auto">
                <Todo
                  text="Prueba 0"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 1"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 2"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 3"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 4"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 1"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 2"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 3"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
              <Grid item xs="auto">
                <Todo
                  text="Prueba 4"
                  priority="69"
                  dueDate={new Date()}
                />
              </Grid>
             
            </Grid>
            <a name="lol">
            <Typography variant="h6" noWrap>
              Referencia a nueva categoria
            </Typography>
            </a>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Catalog);
