import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './component/signup/SignUp';
import UserProfile from './component/Profile/UserProfile'
import PlaceView from './component/PlaceView/PlaceView';
import CategoryView from './component/PlaceView/CategoryView';
import { Place } from '@material-ui/icons';
import { SellerDashboard } from './component/SellerDashboard/SellerDashboard';
import Catalog from './component/catalog/Catalog';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import AppBar from './component/appbar/AppBar';
import Login from './component/signin/Login';
import Order from './component/Order/Order';



function App() {

    const profile = () => (
        <UserProfile/>
        );
    /*const Login = () => (
        <Login/>
        );*/

    /*if (localStorage.getItem("username") === null){
        console.log("hola");
        localStorage.setItem("username","chan");
        localStorage.setItem("password","chan123");
        localStorage.setItem("isloggedin",false);
    }*/
    /*if(localStorage.getItem("nombreTendero")===null){
        localStorage.setItem("nombreTendero","Pepito Perez")
        localStorage.setItem("nombreTienda","Variedades pepito")
        localStorage.setItem("direccion","avenida 123 calle 321")
        localStorage.setItem("telefono","1234567890")
    }*/

  return (
   <BrowserRouter>
    <Switch>
    

        <Route path="/" 
            render={()=><PlaceView/>} exact/>

        <Route path="/signup" 
            render={()=><SignUp/>} exact/>

        <Route path="/app" render={()=>"Registro completo"}/>

        <Route path="/login"
            render={()=>
                <Login/>
                } exact/>

        <Route path="/userprofile"
                    render={()=>
                        <UserProfile/>
                        } exact/>
        
        <Route path="/sellerdashboard"
            render={()=>
                <SellerDashboard/>
                } exact/>
        
        <Route path="/catalog/:store"
            render={(props)=>
                 <Catalog store={props.match.params.store}/>
            
        } exact/>

        <Route path="/orders" render={()=><Order/>}></Route>

            <Route path="/home" exact component = {Home}/>
            <Route path="/products" exact component = {Products}/>
            <Route path="/reports" exact component = {Reports}/>
    </Switch>
   </BrowserRouter>
  );
}

export default App;
