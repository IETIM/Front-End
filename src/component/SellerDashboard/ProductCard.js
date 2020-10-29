import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import logo from './../../logo.svg';
import ModalViewProduct from '../catalog/ModalViewProduct';
import { withStyles } from '@material-ui/core/styles';
import { Modal } from '@material-ui/core';
import ViewProductModal from './ViewProductModal'
import Dialog from '@material-ui/core/Dialog';
import {AlertDialog} from './AlertDialog'


const useStyles = theme => ({
  root: {
    maxWidth: 180
  },
  media: {
    height: 100,
  },
})

class ProductCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {openModal:false,openDialog:false}
    this.handleModal=this.handleModal.bind(this)
    this.handleDialog=this.handleDialog.bind(this)
    this.handleDeleteItem=this.handleDeleteItem.bind(this)


  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.root}>
          <CardActionArea onClick={() => this.handleModal()}>
            <CardMedia
              className={classes.media}
              alt={this.props.name}
              image={this.props.image }
              title={this.props.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {this.props.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Precio: {"$ " + this.props.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Existencias: {this.props.stocks}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => { this.props.handleUpdateProductModal(this.props.index) }}> Actualizar</Button>
            <Button size="small" color="secondary" onClick={()=>{this.handleDialog()}}>Eliminar</Button>
          </CardActions>
        </Card>
        <Modal open={this.state.openModal}
          onClose={this.handleModal}
        >
          <ViewProductModal name= {this.props.name} price={this.props.price} handleModal={this.handleModal}
                              description = {this.props.description} stocks={this.props.stocks} image={this.props.image} category={this.props.category} />
        </Modal>
        <Dialog
        open={this.state.openDialog}
        onClose={this.handleDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <AlertDialog handleDialog={this.handleDialog} handleDeleteItem={this.handleDeleteItem}/>    
        </Dialog>
      </div>);
  }
  handleModal() {
    this.setState(prevstate => ({
      openModal: !prevstate.openModal
    }))
}
handleDialog(){
  this.setState(prevstate => ({
    openDialog: !prevstate.openDialog
  }))
}
handleDeleteItem(){
  this.props.handleDeleteItem(this.props.index)
  this.handleDialog()
}


}


export default withStyles(useStyles, { withTheme: true })(ProductCard);
