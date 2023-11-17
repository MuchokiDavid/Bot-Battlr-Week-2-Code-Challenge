import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Home from './components/Home';

function App() {
  return (
    <div className="App bg-slate-100">
      <Menubar/>
      <Home/>
    </div>
  );
}

export default App;
