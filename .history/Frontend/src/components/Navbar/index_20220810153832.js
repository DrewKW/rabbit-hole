import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to='/'>Movies</NavLogo>
    <MobileIcon>
    <FaBars />
    </MobileIcon>
    <Navmenu>
    <NavItem>
    <NavLinks to='about'>About</NavLinks>
    </NavItem>
    </Navmenu>
    </NavbarContainer>
    </Nav>
    </>
  );
};

export default Navbar
