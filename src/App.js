import React from 'react';
import Header from './Header';
import './App.css';
import Home from './Home';
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./SignIn";
import Footer from './footer'
import Main from './main'

function App() {
  console.log("How are you Mr. Shiva Reddy?");
  console.log("How is your health Mr. Shiva Reddy?");
  //can you slove the issue by committing the changes in firebase app
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Sign in">
            <SignIn />
          </Route>
          <Header />
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
            <Main />
            <Footer />
          </Route>
        </Switch>
      </div>
      <input type="text" placeholder="email" />
    </Router>

  );
}

export default App;
