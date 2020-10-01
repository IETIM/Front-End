import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignUp from './component/signup/SignUp';
import UserProfile from './component/Profile/UserProfile'
import PlaceView from './component/PlaceView/PlaceView';
import CategoryView from './component/PlaceView/CategoryView';
import { SellerDashboard } from './component/SellerDashboard/SellerDashboard';
import Catalog from './component/catalog/Catalog';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './component/signin/Login';
import Order from './component/Order/Order';
import ValidateCart from './component/validateCart/ValidateCart';



function App() {

    const profile = () => (
        <UserProfile/>
        );

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
        
        <Route path="/catalog"
            render={()=>
                 <Catalog/>
            
        } exact/>

        <Route path="/validateCart"
            render={()=>
                 <ValidateCart/>
            
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
