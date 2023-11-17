import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Home from './components/Home';
import Army from './components/Army';

function App() {
  return (
    <div className="App bg-slate-100">
      <Menubar/>
      <Army/>
      <Home/>
    </div>
  );
}

export default App;
