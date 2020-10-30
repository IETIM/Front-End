import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'
import { Redirect, Link, withRouter } from 'react-router-dom';
import Axios from 'axios';
import { getUrl } from '../../vars';


const url = getUrl();


export class Login extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props);
        this.state = {email:"", password:"",IsLoggedIn: false};
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePasswd = this.handleChangePasswd.bind(this);
        this.handleSend = this.handleSend.bind(this);
    }

    handleChangeEmail(e) {
        this.setState({
            email : e.target.value
        });
    }

    handleChangePasswd(e) {
        this.setState({
            password : e.target.value
        })
    }

    handleSend() {
        var state = this.state;
        var setPassword = this.setState;
        Axios.post(url+"/login",{username:this.state.email,password:this.state.password})
        .then((data)=>{
            console.log(data);
            var token  = data.data.token;
            console.log(token);
            localStorage.setItem("IsLoggedIn",true);
            localStorage.setItem("token",token);
            Axios.get(url+"/role",{headers:{Authorization:token}}).then((li)=>{
                localStorage.setItem("roles",JSON.stringify(li.data));
                this.state.password="";
                this.setState(this.state);
                //setPassword(state);
            });

        }).catch((err)=>{
            console.log(err);
            alert("No se pudo iniciar sesion");
        });
        
    }
    
    render(){
        if(localStorage.getItem("IsLoggedIn")){
            return <Redirect to="/"></Redirect>
        }
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout">
                    <Paper className="paper">
                        <Avatar className="avatar">
                            <LockIcon />
                        </Avatar>
                        <Typography variant="h2">Ingresar</Typography>
                        <div>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="email">Correo</InputLabel>
                                <Input 
                                id="email" 
                                name="email" 
                                autoComplete="email" 
                                onChange={this.handleChangeEmail}
                                autoFocus />
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Contraseña</InputLabel>
                                <Input
                                    name="password"
                                    id="password"
                                    type="password"
                                    onChange={this.handleChangePasswd}
                                    autoComplete="current-password"
                                />
                            </FormControl>
                            <div style={{display:'flex'}}>
                                <Button onClick={this.handleSend}
                                    variant="outlined" 
                                    color="primary"
                                    type = "submit"
                                    fullWidth
                                >
                                    Ingresar
                                </Button>
                                <Button
                                    variant="outlined"
                                    type ="submit"
                                    fullWidth
                                    color="primary"
                                    href = "/signup"
                                >
                                    Registro
                                </Button>
                            </div>
                        </div>
                    </Paper>
                </main>
            </React.Fragment>
        );
    }

}

export default Login;
