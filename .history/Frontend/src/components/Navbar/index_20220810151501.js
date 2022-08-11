import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to='/'>Movies</NavLogo>
    <MobileIcon>
    <Fa
    </MobileIcon>
    </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar
