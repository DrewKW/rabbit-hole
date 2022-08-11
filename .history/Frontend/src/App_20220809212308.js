import React from 'react';
import { Nav } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <div>
    <NavbarContainer>
    <NavLogo>
    Movies
    </NavLogo>
    </NavbarContainer>
    </div>
  );
}

export default App;
