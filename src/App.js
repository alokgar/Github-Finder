import React from "react";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Navbar from "./components/layout/Navbar"
import User from "./components/Users/User"
import Alert from "./components/layout/Alert"
import "./App.css";
import About from "./components/Pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import Home from './components/Pages/Home';
import NotFound from './components/Pages/NotFound';

const App = () =>  {
  
  return (
    <GithubState>
    <AlertState> 
      <Router>
      <div className = "App">
          <Navbar/>
          <div className= 'container'>
              <Alert />
              <Switch>
                <Route exact path = '/' component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route path="/" component={ NotFound } />
              </Switch>
          </div>
      </div>
      </Router>
    </AlertState>   
    </GithubState>
  );
}
export default App;
