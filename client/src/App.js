import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import VideosList from './components/Videos/VideosList';
import Roster from './components/Roster/Roster';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/videos' component={VideosList} />
        <Route exact path='/roster' component={Roster} />
      </Switch>
    </div>
  );
}

export default App;
