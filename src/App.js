import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';
import SignUp from './component/signup/SignUp';

function App() {
  return (
   <BrowserRouter>
    <Switch>

        <Route path="/" 
            render={()=><Main/>} exact/>

        <Route path="/signup" 
            render={()=><SignUp/>} exact/>

        <Route path="/app" render={()=>"Registro completo"}/>
        

    </Switch>
   </BrowserRouter>
  );
}

export default App;
