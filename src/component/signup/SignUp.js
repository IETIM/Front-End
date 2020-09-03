import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './SignUp.css';

function Password(props){
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,40}$/;
    const [show,setShow] = useState(false);
    return(
        <div>
        <div style={{width:"80px"}}>Contraseña: </div>
        <div style={{width:"200px"}}>
            {!show && <input onChange={(e)=> props.onChange(e)} value={props.value} type="password"></input>}
            {show && <input value={props.value} onChange={(e)=> props.onChange(e)} type="text"></input>}
        </div>
        <div style={{width:"40px"}}>
            <button className="button" onClick={()=> setShow(!show)}>
                <span className="material-icons">{show && "visibility_off"} {!show && "visibility"}</span>
            </button>
        </div>
        <div style={{width:"15px"}}>
            {props.value!=null && regex.test(props.value) && <span style={{color:"green"}} className="material-icons">check</span>}
            {props.value!=null && !regex.test(props.value) && <span style={{color:"red"}} className="material-icons">close</span>}
        </div>
        </div>);
}


function RetryPassword(props){
    const [show,setShow] = useState(false);
    const [text,setText] = useState(null);
    return(<div>
        <div style={{width:"80px"}}>Confirma la contraseña: </div>
        <div style={{width:"200px"}}>

            {!show && <input onChange={(e)=>{
                props.validate(props.password!==null && e.target.value!==null && props.password===e.target.value);
                console.log(props.password!==null && e.target.value!==null && props.password===e.target.value);
                setText(e.target.value);
            }} value={text} type="password"></input>}


            {show && <input value={text} onChange={(e)=>{
                setText(e.target.value);
                }} type="text"></input>}

        </div>
        <div style={{width:"40px"}}>
            <button className="button" onClick={()=> setShow(!show)}>
                <span className="material-icons">{show && "visibility_off"} {!show && "visibility"}</span>
            </button>
        </div>
        <div style={{width:"15px"}}>
            {props.password!==null && text!==null && props.password===text && <span style={{color:"green"}} className="material-icons">check</span>}
            {props.password!==null && text!==null && props.password!==text && <span style={{color:"red"}} className="material-icons">close</span>}
        </div>
        </div>)
}

function Email(props){
    return(
        <div>
            <div style={{width:"80px"}}>Correo:</div>
            <div style={{width:"200px"}}><input type="text" value={props.value} onChange={(e)=> props.onChange(e)}/></div>
            <div style={{width:"40px"}}></div>
            <div style={{width:"4px"}}></div>
        </div>
    )
}

function UserName(props){
    return(<div>
        <div style={{width:"80px"}}>Nombre:</div>
        <div style={{width:"200px"}}><input type="text" value={props.username} onChange={(e)=>props.onChange(e)}></input></div>
        <div style={{width:"40px"}}></div>
        <div style={{width:"5px"}}></div>

    </div>)
}


function login(user,password,verify){
    console.log(user+" + "+password);
    console.log(verify);
    if(user!==null && password!==null && verify){
        localStorage.setItem("username",user);
        localStorage.setItem("password",password);
    }
    
}

function register(correo,user,password){
    const newUser = {"correo":correo,"name":user,"password":password};
    axios.post(`https://ieti-deep-backend.herokuapp.com/register`, newUser)
      .then(res => {
          console.log("OK");
      })
 
  }



export default function SignUp(){
    const [email,setEmail] = useState(null);
    const [user,setUser] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirm,setConfirm] = useState(false);

    if(localStorage.getItem("password")!=null){
        return(<Redirect to="/app"/>)
    }

    return(<div id="registro">
        <div>
            <div style={{fontSize:"90px"}}>
                <b>Registro</b>
            </div>
            <div id="campos">
                <Email onChange={(e)=> setEmail(e.target.value)} value={email}/>
                <UserName onChange={(e)=>setUser(e.target.value.toUpperCase().replace(" ","-"))} username={user}/>
                <Password onChange={(e)=> setPassword(e.target.value)} value={password}/>
                <RetryPassword password={password} validate={(bool)=> setConfirm(bool)}/>
                <div>
                    <button className="button" onClick={()=>{
                        register(email,user,password);
                        //login(user,password,confirm);
                        setEmail(null);
                    }}><b>Registro</b></button>
                </div>
            </div>
        </div>
    </div>)
}