import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import DashBoard from "./Components/DashBoard";

import { BrowserRouter, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/DashBoard" component={DashBoard}/>
      </Switch>
    </BrowserRouter>


  );
}

export default App;
