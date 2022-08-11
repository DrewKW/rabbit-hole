import { useState, useEffect } from 'react';
import React from 'react';
import { Nav } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';


/* function App() {
  useEffect(() => {
    fetch('http://localhost:5000/')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  }, []); */


function App() {
  


  return (
    <Router>
    <Navbar />
    </Router>
  );
}

export default App;
