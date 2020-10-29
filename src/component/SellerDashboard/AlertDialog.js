import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


export class AlertDialog extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <DialogTitle id="alert-dialog-title">{"¿Eliminar producto?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Con su confirmación se procederá a eliminar el producto, tenga en cuenta que esta acción no es reversible.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={()=>this.props.handleDialog()} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={()=>this.props.handleDeleteItem()} color="primary" >
                        Confirmar
                    </Button>
                </DialogActions>
            </div>

        );
    }
}