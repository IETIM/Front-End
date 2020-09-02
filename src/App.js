import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import SignUp from './component/signup/SignUp';
import { SignIn } from './component/signin/SignIn';
import UserProfile from './component/Profile/UserProfile'
import PlaceView from './component/PlaceView/PlaceView';
import CategoryView from './component/PlaceView/CategoryView';
import { Place } from '@material-ui/icons';

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

    </Switch>
   </BrowserRouter>
  );
}

export default App;
