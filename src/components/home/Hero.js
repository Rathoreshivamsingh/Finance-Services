import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { slideInLeft, slideInRight } from '../../utils/animations';

const HeroSection = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(0, 86, 179, 0.7) 0%, rgba(0, 160, 220, 0.6) 100%);
    z-index: -1;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroText = styled(motion.div)`
  flex: 1;
  color: ${props => props.theme.colors.white};
  max-width: 600px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 40px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.2;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 16px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const HeroImage = styled(motion.div)`
  flex: 1;
  max-width: 500px;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: ${props => props.theme.shadows.large};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    max-width: 400px;
  }
`;

const FloatingShape = styled(motion.div)`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  z-index: -1;
`;

const Hero = () => {
  return (
    <HeroSection>
      <FloatingShape
        style={{ width: '300px', height: '300px', top: '-150px', left: '-150px' }}
        animate={{ 
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut"
        }}
      />
      <FloatingShape
        style={{ width: '200px', height: '200px', bottom: '50px', right: '100px' }}
        animate={{ 
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container">
        <HeroContent>
          <HeroText
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
          >
            <HeroTitle>Your Trusted Partner for Financial Solutions</HeroTitle>
            <HeroSubtitle>
              We offer comprehensive loan services including home loans, education loans, 
              business loans, and insurance solutions tailored to your needs.
            </HeroSubtitle>
            <ButtonGroup>
              <Button 
                as={Link} 
                to="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Services
              </Button>
              <Button 
                as={Link} 
                to="/contact"
                secondary
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </Button>
            </ButtonGroup>
          </HeroText>
          
          <HeroImage
            variants={slideInRight}
            initial="hidden"
            animate="visible"
          >
            <img src="/assets/images/finance-hero.jpg" alt="Financial Services" />
          </HeroImage>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero;