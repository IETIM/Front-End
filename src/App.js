import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import SignUp from './component/signup/SignUp';
import  SignIn  from './component/signin/SignIn';
import UserProfile from './component/Profile/UserProfile'
import Catalog from './component/catalog/Catalog';

function App() {
  return (
   <BrowserRouter>
    <Switch>

        <Route path="/" 
            render={()=><Main/>} exact/>

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
        <Route path="/catalog"
            render={()=>
                 <Catalog/>
            
        } exact/>

    </Switch>
   </BrowserRouter>
  );
}

export default App;
