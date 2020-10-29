import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom';
import PlaceView from '../PlaceView/PlaceView';
import axios from 'axios'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Dialog from './ShopDialog'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '100%',
  },
}));

export default function Register(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,

  });

  const [values2, setValues2] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const [formulario, setFormulario] = React.useState({
    fullName: '',
    email: '',
    cellphone: '',
    address : '',
    passwd: '',
    passwdConfirm: ''
  });
  
  const [state, setState] = React.useState({
    checkedA: false,
    tendero : false,
    isOpen : false,
    shopname : "",
    location : "",
    type : "",

  });

  const handleChangeForm = (prop) => (event) => {
    setFormulario({ ...formulario, [prop]: event.target.value});    
  }

  const handleChangeSt = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    state.tendero = true; 
  };

  const handleNameChange = (event) => {
  
  };

  const handleLocationChange = (event) => {
  
  };

  const handleTypeChange = (event) => {

  };

  const handleSubmit = (event) => {
    //TODO register Storekeepr
  };

  const handleOpen = (event) => {
    //TODO Open dialog
  };

  

  const [noError, setError] = React.useState({
    flag: true
  });
    
  
  const verifyNoError = () => {
    var flagError;
    if (formulario.passwd === formulario.passwdConfirm) {
      flagError = true;
    } else {
      flagError = false;
    }
    setError({ ...noError, flag: flagError});   
  };

  const registerUser = (event) => {
      event.preventDefault();
    verifyNoError();
    console.log(formulario);
    if (formulario.passwd !== formulario.passwdConfirm || (formulario.passwd === "" || formulario.passwdConfirm === "")) {
      alert("Las contraseñas no coinciden o son vacias, intente nuevamente!");
      return;
    }
    
    //let url = "https://ieti-deep-backend.herokuapp.com";
    let url = "http://localhost:8080"
    let newuser = {
          name: formulario.fullName,  
          email: formulario.email, 
          password: formulario.passwd, 
          cellphone : formulario.cellphone,
          address : formulario.address};
    axios.post(url+"/register",newuser)
        .then((data)=>{
            localStorage.setItem("username", formulario.fullName);
            localStorage.setItem("password", formulario.passwd);    
            localStorage.setItem("email", formulario.email); 
            localStorage.setItem("cellphone", formulario.cellphone); 
            localStorage.setItem("address", formulario.address); 
            localStorage.setItem("IsLoggedIn",true);
        }).catch((err)=>{
            localStorage.removeItem("IsLoggedIn");
            console.log(err);
            alert("No se pudo registrar con éxito");
        }); 
      }
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleChange2 = (prop) => (event) => {
    setValues2({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword2 = () => {
    setValues2({ ...values2, showPassword: !values2.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  if (localStorage.getItem('IsLoggedIn'))  {
    return (
      <PlaceView />
    );
  }

  return (
    <div className={classes.root}>
        <React.Fragment>
                <CssBaseline />
                <main className="layout">                    
                    <Paper className="paper">                                                
                        <Typography variant="h2">Registro</Typography>
                        <Avatar className="avatar">
                            <AccountBoxIcon />
                        </Avatar>
                        <form className="form" onSubmit = {registerUser}>                            
                            <FormControl className={classes.root} noValidate autoComplete="off">
                                <TextField required onChange={handleChangeForm("fullName")} id="idFullName" label="Nombre" variant="outlined"/>
                            </FormControl>
                            <br></br>
                            
                            <FormControl className={classes.root} noValidate autoComplete="off">
                                <TextField type ="email" required onChange={handleChangeForm("email")} id="idEmail" label="Email" variant="outlined" />
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} noValidate autoComplete="off">
                                <TextField required onChange={handleChangeForm("cellphone")} id="idFullName" label="Celular" variant="outlined"/>
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} noValidate autoComplete="off">
                                <TextField required onChange={handleChangeForm("address")} id="idFullName" label="Dirección" variant="outlined"/>
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} variant="outlined">
                                <InputLabel error = {noError.flag ? false: true} id = "idPasswd" htmlFor="outlined-adornment-password" >Contraseña</InputLabel>
                                <OutlinedInput required
                                error = {noError.flag ? false: true}
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}                                
                                onChange={handleChange('password'), handleChangeForm("passwd")}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={70}
                                />
                            </FormControl>
                            <br></br>
                            <FormControl className={classes.root} variant="outlined">
                                <InputLabel error = {noError.flag ? false: true} id = "idPasswdConfirm" htmlFor="outlined-adornment-password" >Confirmar contraseña</InputLabel>
                                <OutlinedInput required
                                error = {noError.flag ? false: true}
                                id="outlined-adornment-password"
                                type={values2.showPassword ? 'text' : 'password'}                                
                                onChange={handleChange2('password'), handleChangeForm("passwdConfirm")}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword2}
                                        onMouseDown={handleMouseDownPassword2}
                                        edge="end"
                                    >
                                        {values2.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={130}
                                />
                            </FormControl>

                            <FormControlLabel
                              control={
                                <Checkbox
                                  checked={state.checkedB}
                                  onChange={handleChangeSt}
                                  name="checkedB"
                                  color="primary"
                                />
                              }
                              label="Registrarme como tendero"
                        />
                            <br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"                                
                            >
                                Registrarse
                            </Button>
                            <br></br>
                            <br></br>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                href = "login"                             
                            >
                                Sign In
                            </Button>
                        </form>

                        <Dialog 
                          handleNameChange = {handleNameChange}
                          handleLocationChange = {handleLocationChange}
                          handleTypeChange = {handleTypeChange}
                          handleSubmit = {handleSubmit}
                          handleOpen = {handleOpen}
                          open = {state.isOpen}
                        > </Dialog>
                       
                      
                  </Paper>
                </main>  
              
            </React.Fragment>                  
    </div>
  );
}