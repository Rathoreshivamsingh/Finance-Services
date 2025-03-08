import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { fadeIn } from '../../utils/animations';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${props => props.scrolled ? props.theme.colors.white : 'transparent'};
  box-shadow: ${props => props.scrolled ? props.theme.shadows.small : 'none'};
  transition: all ${props => props.theme.transitions.standard};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.scrolled ? props.theme.colors.primary : props.theme.colors.white};
  transition: color ${props => props.theme.transitions.standard};
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background-color: ${props => props.theme.colors.white};
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 80px;
    transition: right 0.3s ease;
    box-shadow: ${props => props.isOpen ? props.theme.shadows.large : 'none'};
  }
`;

const NavItem = styled.li`
  margin: 0 15px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin: 15px 0;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.scrolled ? props.theme.colors.dark : props.theme.colors.white};
  font-weight: 500;
  position: relative;
  transition: color ${props => props.theme.transitions.standard};
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
    transition: width ${props => props.theme.transitions.standard};
  }
  
  &:hover, &.active {
    color: ${props => props.theme.colors.accent};
    
    &:after {
      width: 100%;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    color: ${props => props.theme.colors.dark};
  }
`;

const ServicesDropdown = styled.div`
  position: relative;
  
  &:hover .dropdown-content {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.colors.white};
  min-width: 200px;
  box-shadow: ${props => props.theme.shadows.medium};
  border-radius: 4px;
  padding: 10px 0;
  z-index: 1;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    position: static;
    box-shadow: none;
    padding: 10px 0 10px 20px;
  }
`;

const DropdownItem = styled(Link)`
  color: ${props => props.theme.colors.dark};
  padding: 10px 20px;
  display: block;
  transition: background-color ${props => props.theme.transitions.standard};
  
  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  font-size: 24px;
  color: ${props => props.scrolled ? props.theme.colors.dark : props.theme.colors.white};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
    z-index: 1001;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <HeaderContainer 
      scrolled={scrolled}
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <Nav>
          <Logo to="/" scrolled={scrolled}>FinanceHub</Logo>
          
          <MenuButton scrolled={scrolled} onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
          
          <NavLinks isOpen={isOpen}>
            <NavItem>
              <NavLink 
                to="/" 
                scrolled={scrolled}
                className={location.pathname === '/' ? 'active' : ''}
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink 
                to="/about" 
                scrolled={scrolled}
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={closeMenu}
              >
                About
              </NavLink>
            </NavItem>
            
            <NavItem>
              <ServicesDropdown>
                <NavLink 
                  to="/services" 
                  scrolled={scrolled}
                  className={location.pathname.includes('/services') ? 'active' : ''}
                >
                  Services
                </NavLink>
                <DropdownContent className="dropdown-content">
                  <DropdownItem to="/services/home-loan" onClick={closeMenu}>Home Loan</DropdownItem>
                  <DropdownItem to="/services/education-loan" onClick={closeMenu}>Education Loan</DropdownItem>
                  <DropdownItem to="/services/business-loan" onClick={closeMenu}>Business Loan</DropdownItem>
                  <DropdownItem to="/services/insurance" onClick={closeMenu}>Insurance</DropdownItem>
                </DropdownContent>
              </ServicesDropdown>
            </NavItem>
            
            <NavItem>
              <NavLink 
                to="/contact" 
                scrolled={scrolled}
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={closeMenu}
              >
                Contact Us
              </NavLink>
            </NavItem>
          </NavLinks>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header;