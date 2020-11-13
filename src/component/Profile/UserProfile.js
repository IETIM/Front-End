import React from 'react';
import './Image.css'
import { Redirect } from 'react-router-dom';
import Acordion from './Acordion';
import AppBar from '../appbar/AppBar';
import { Button, Typography } from '@material-ui/core';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:localStorage.getItem("username"), 
                  email:localStorage.getItem("email"),
                  password : localStorage.getItem("password"), 
                  cellphone: localStorage.getItem("cellphone"),
                  address : localStorage.getItem("address"),
                  tienda : localStorage.getItem("tienda")}
  }

  handleChangeName = (e) =>{
    console.log("are we here")
    this.setState({
      username : e.target.value
    });
  }

  handleChangeTienda = (e) =>{
    this.setState({
      tienda : e.target.value
    });
  }

  handleChangeMail = (e) =>{
    this.setState({
      email : e.target.value
    });
  }
  
  handleChangePassword = (e) =>{
    this.setState({
      password : e.target.value
    });
  }

  handleChangeCell = (e) =>{
    this.setState({
      cellphone : e.target.value
    });
  }

  handleChangeAdd = (e) =>{
    this.setState({
      address : e.target.value
    });
  }

  handleSave = () =>{
    this.setState(this.state);
  }

  render(){
    if (!localStorage.getItem("IsLoggedIn")){
      return <Redirect to="/login"> </Redirect>
    }
    
    return(
      <div>
        <AppBar />

        <div style = {{height: '100px', width: '100%'}}></div>

        <div style={{heigt:'50%',display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
          
        <Typography variant="h2" gutterBottom>
          Mis datos
        </Typography>

          <br/>
          <br/>
       
            
            <Acordion
                username = {this.state.username}
                email = {this.state.email}
                password = {this.state.password}
                cellphone = {this.state.cellphone}
                address = {this.state.address}
                handleChangeName = {this.handleChangeName}
                handleChangeMail = {this.handleChangeMail}
                handleChangePassword = {this.handleChangePassword}
                handleChangeCell = {this.handleChangeCell}
                handleChangeAdd = {this.handleChangeAdd}
                handleSave = {this.handleSave}
            > 
            </Acordion>


        </div>
      </div>
  
    );
  }
 
}