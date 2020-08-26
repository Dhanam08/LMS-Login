import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login";
import { BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Login />
    
    </BrowserRouter>
      
     
  );
}

export default App;
