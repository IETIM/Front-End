import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import SignUp from './component/signup/SignUp';
import { SignIn } from './component/signin/SignIn';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
        

    </Switch>
   </BrowserRouter>
  );
}

export default App;
