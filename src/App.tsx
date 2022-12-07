import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {Routes,Route} from 'react-router-dom'
import IdData from './IdData';


function App() {
  return (
    <Routes>
      <Route path ='/' element={<Home/>}/>
      <Route path = '/IdData' element={<IdData/>}/>
    </Routes>
  );
}

export default App;
