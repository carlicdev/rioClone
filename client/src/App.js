import React from 'react';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App login-cover h-screen">
      <Navbar />
      <Login />
    </div>
  );
}

export default App;
