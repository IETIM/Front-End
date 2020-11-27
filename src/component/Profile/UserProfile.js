import React from 'react';
import {Mytext} from './Mytext';
import {Image} from './Image';
import './Image.css'
import { Redirect } from 'react-router-dom';
import Acordion from './Acordion';
import AppBar from '../appbar/AppBar';
import { Button, Typography } from '@material-ui/core';
import axios from 'axios';
import { getUrl } from '../../vars';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username:"", email:"",password : "",  cellphone: "", address : "", tienda : "", 
                  usern : "" , emailn : "",passwordn:"", cellphonen:"",addressn : ""}
  }

  componentDidMount() {
    let url = getUrl();
    axios.get(url+'/user',{
      headers : { 
        'Authorization' : localStorage.getItem("token") }

      })
      .then(response => {
        console.log("USER",response.data);
        this.setState({
          email : response.data.email,
          username : response.data.name,
          password : localStorage.getItem("notpw"),   
          cellphone : response.data.cellphone,
          address : response.data.address
        })
        this.handleSave();
      })
      .catch(e =>{ 
        console.log(e);
      })
  }

  handleChangeName = (e) =>{
    this.setState({
      usern : e.target.value
    });
  }

  handleChangeTienda = (e) =>{
    this.setState({
      tienda : e.target.value
    });
  }


  handleChangeMail = (e) =>{
    this.setState({
      emailn : e.target.value
    });
  }
  
  handleChangePassword = (e) =>{
    this.setState({
      passwordn : e.target.value
    });
  }

  handleChangeCell = (e) =>{
    this.setState({
      cellphonen : e.target.value
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

  handleClear = () => {
    this.setState({
      usern : "" , emailn : "",passwordn:"", cellphonen:"",addressn : ""}
    )
    

  }

  buildHeaders(){
    let headers={'Authorization':localStorage.getItem("token")}
    return headers
}

  handleSend = () =>{ 

    let newuser = {
      name: this.state.usern,    
      email: this.state.emailn, 
      password: this.state.passwordn, 
      cellphone : this.state.cellphonen,
      address : this.state.addressn}

      axios.patch(getUrl()+"/"+this.state.email,newuser,{headers : this.buildHeaders()})
          .then((data)=>{
              alert("Su información se ha actualizado con éxito");
              this.componentDidMount();
          }).catch((err)=>{
              console.log(err);
              alert("No se pudo actualizar su información con éxito");
          }); 
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
                handleChangeName = {this.handleChangeName}
                handleChangeMail = {this.handleChangeMail}
                handleChangePassword = {this.handleChangePassword}
                handleChangeCell = {this.handleChangeCell}
                handleChangeAdd = {this.handleChangeAdd}
                handleChangeTienda = {this.handleChangeTienda}
                handleSave = {this.handleSave}
            > 
            </Acordion>

            <br/>

          <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={this.handleSend}
                startIcon={<SaveIcon />}
              >
                Guardar
            </Button>
        </div>
      </div>
  
    );
  }
 
}