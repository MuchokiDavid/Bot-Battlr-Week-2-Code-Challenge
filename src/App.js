import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import Home from './components/Home';

function App() {

  const [bots, setBots]= useState([])
  const updateBots = (newBot) => {
    setBots([...bots,newBot]);
  };

  //fetch data
  useEffect(()=> {
    fetch("http://localhost:3000/bots")
    .then((res)=> res.json())
    .then((bots)=> setBots(bots))
  }, [])
  // console.log(bots)

  return (
    <div className="App bg-slate-100">
      <Menubar/>
      <Home bots= {bots} updateBots={updateBots}/>
    </div>
  );
}

export default App;
