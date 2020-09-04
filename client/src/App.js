import React from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import { Route, Switch } from 'react-router-dom';
import VideosList from './components/Videos/VideosList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/videos' component={VideosList} />
      </Switch>
    </div>
  );
}

export default App;
