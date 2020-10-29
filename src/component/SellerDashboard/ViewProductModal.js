import React from 'react';
import { InputLabel, Button, TextField, Select, FormControl } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { ProductForm } from './ProductForm';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';





const useStyles = theme => ({
    paper: {
        margin: 'auto',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 500,
        height: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        overflowY: "auto",
    },
    media: { height: 300 },
    button: {
        margin: theme.spacing(1),
      }

})


class ViewProductModal extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props;
        return (

            <div className={classes.paper} tabIndex="-1" >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            alt={this.props.name}
                            image={this.props.image}
                            title={this.props.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Descripción: {this.props.description}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Precio: {this.props.price}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Existencias: {this.props.stocks}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                Categoría: {this.props.category}
                            </Typography>
                            <br />
                            <center>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    className={classes.button}
                                    onClick={() => this.props.handleModal()}
                                    startIcon={<CloseIcon />}>
                                        Cerrar
                                </Button>
                            </center>
                        </CardContent>
                    </CardActionArea>

                </Card>
            </div>

        )
    }
}
export default withStyles(useStyles, { withTheme: true })(ViewProductModal);
