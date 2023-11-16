import { useState, useEffect } from 'react';
import React from 'react';
import './App.css';
import Menubar from './components/Menubar';
import { Routes, Route, redirect } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Form from './pages/Form';

function App() {

  const [bots, setBots]= useState([])

  //fetch data
  useEffect(()=> {
    fetch("http://localhost:3000/bots")
    .then((res)=> res.json())
    .then((bots)=> setBots(bots))
  }, [])
  // console.log(bots)

  return (
    <div className="App">
      <h1>React Week 2 challenge</h1>
      <Menubar/>
      <Routes>
        <Route path='/' element={<Home bots= {bots}/>}></Route>
        <Route path='/form' element={<Form/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
