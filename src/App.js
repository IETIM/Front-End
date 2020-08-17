import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Main from './component/Main/Main';

function App() {
  return (
   <BrowserRouter>
    <Switch>

        <Route path="/" render={()=><Main/>}/>

    </Switch>
   </BrowserRouter>
  );
}

export default App;
