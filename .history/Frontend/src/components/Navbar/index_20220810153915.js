import React from 'react'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';

const Navbar = () => {
  return (
    <>
    <Nav>
    <NavbarContainer>
    <NavLogo to='/'>Movies</NavLogo>
    <MobileIcon>
    <FaBars />
    </MobileIcon>
    <NavMenu>
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
