import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from "./Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import SignIn from "./SignIn";

function App() {
console.log("How are you Mr. Shiva Reddy?");
//Hi I am writting multiple line
// Welcome to App.js
// This is the main file for project
// Please dont touch and delete it
  return (
    <Router>
    <div className="app">
    <Switch>
    <Route path="/Sign in">
      <SignIn/>
      </Route>
      <Header/>
        <Route path="/Checkout">
      <Checkout/>
      </Route>
      <Route path="/">
      <Home/>
      </Route>
      </Switch>
    </div>
    </Router>

  );
// Hello
// This is end of file for App.js
}

export default App;
