import React from 'react';
import {Mytext} from './Mytext';
import {Image} from './Image';
import './Image.css'
import { Redirect } from 'react-router-dom';
import Acordion from './Acordion';
import AppBar from '../appbar/AppBar';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import { Button } from '@material-ui/core';

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
      localStorage.setItem("username",this.state.username);
      localStorage.setItem("email",this.state.email);
      localStorage.setItem("password",this.state.password);
      localStorage.setItem("cellphone",this.state.cellphone);
      localStorage.setItem("address",this.state.address);
      localStorage.setItem("tienda",this.state.tienda);
      this.setState(this.state);
      
  }


  render(){
    if (!localStorage.getItem("IsLoggedIn")){
      return <Redirect to="/login"> </Redirect>
    }
    
    return(



      <div style={{heigt:'50%',display:"flex", flexDirection:"column", alignItems:"center",justifyContent:"center"}}>
        <Image>
                  
        </Image>

        <br/>
        <br/>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
          
          <Acordion
              username = {this.state.username}
              email = {this.state.email}
              password = {this.state.password}
              cellphone = {this.state.cellphone}
              handleChangeName = {this.handleChangeName}
              handleChangeMail = {this.handleChangeMail}
              handleChangePassword = {this.handleChangePassword}
              handleChangeCell = {this.handleChangeCell}
              handleChangeAdd = {this.handleChangeAdd}
              handleChangeTienda = {this.handleChangeTienda}
              handleSave = {this.handleSave}
          > 
          </Acordion>

        </div>

      </div>

  
    );
    /*return(
      <div style={{display:'flex',alignItems:'center',justifyContent:'center', height:'100%',width:'100%',backgroundImage: 'linear-gradient(135deg, #08185B, #949CBC)'}}>
        
        <div style={{height:'500px',background:'white'}}>
          <div className='slide-in' style={{width:'100%', height:'45%',background:'#90caf9',borderBottomLeftRadius:'10px',borderBottomRightRadius:'10px',animation:'slide'}}>
              <Image>
                
              </Image>
          </div>
          <Mytext 
          id="username" 
          field="username"
          title="Username"> 
          </Mytext>
          <Mytext
          id="email" 
          field="email"
          title="E-mail">
          </Mytext>
          <Mytext
          id="creditsCard" 
          field="creditsCard" 
          title="CreditCard Number"> 
          </Mytext>
          <Mytext
          id="cellphone" 
          field="cellphone"
          title="Cellphone">
          </Mytext>
          </div> 
      </div>
    );*/
  }
 
}