import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './component/signup/SignUp';
import  SignIn  from './component/signin/SignIn';
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


function App() {
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
                <SignIn/>
                } exact/>
        <Route path="/userprofile"
            render={()=>
                <UserProfile/>
                } exact/>
        <Route path="/sellerdashboard"
            render={()=>
                <SellerDashboard/>
                } exact/>
        
        <Route path="/catalog"
            render={()=>
                 <Catalog/>
            
        } exact/>

    </Switch>

    <AppBar/>
            <Route path="/home" exact component = {Home}/>
            <Route path="/products" exact component = {Products}/>
            <Route path="/reports" exact component = {Reports}/>
   </BrowserRouter>
  );
}

export default App;
