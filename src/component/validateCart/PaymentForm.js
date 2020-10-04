import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom';


export class PaymentForm extends React.Component{

    constructor(props) {
        super(props);          
    }    

    render(){

        return (
            <div className = "login" style = {{width:'100%', height:'100hv', display:'flex'}}>
                    <React.Fragment>
                        <CssBaseline />
                        <main className="layout">
                            <Paper className="paper">                                
                                <Typography variant="h2">Confirmar Pago</Typography>
                                <div className="form">
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="precio"> Precio </InputLabel>
                                        <Input id="precio" name="precio" autoComplete="precio" autoFocus />
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="Método">Método</InputLabel>
                                        <Input
                                            name="Método"
                                            id="Método"
                                            autoComplete="current-Método"
                                        />
                                    </FormControl>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                    >
                                        Confirmar Compra
                                    </Button>
                                </div>
                            </Paper>
                        </main>
                    </React.Fragment>
            </div>
        );
    }

}

export default withRouter(PaymentForm);