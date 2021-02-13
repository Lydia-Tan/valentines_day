import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Lovely from './components/pages/Lovely';
import Surprise from './components/pages/Surprise';
import Ego from './components/pages/Ego';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home}/>
      </Switch>
      <Switch>
        <Route path = '/egoboost' exact component = {Ego}/>
      </Switch>
      <Switch>
        <Route path = '/lovely' exact component = {Lovely}/>
      </Switch>
      <Switch>
        <Route path = '/surprise' exact component = {Surprise}/>
      </Switch>

    </Router>
   
    </>      

     
  );
}

export default App;
