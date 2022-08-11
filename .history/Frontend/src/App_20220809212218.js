import React from 'react';
import { Nav } from 'react-bootstrap';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo>
    Movies
    </NavLogo>
    </NavbarContainer>
    </Nav>
    </>
    
  );
}

export default App;
