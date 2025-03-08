import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { fadeIn, slideInUp } from '../../utils/animations';

const CTASection = styled.section`
  position: relative;
  color: ${props => props.theme.colors.white};
  position: relative;
  overflow: hidden;
  padding: 80px 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/assets/images/cta-bg.jpg');
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
    background: linear-gradient(135deg, rgba(0, 86, 179, 0.85) 0%, rgba(0, 160, 220, 0.85) 100%);
    z-index: -1;
  }
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 20px;
`;

const CTAText = styled(motion.p)`
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Shape = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
`;

const CallToAction = () => {
  return (
    <CTASection>
      <Shape 
        style={{ width: '400px', height: '400px', top: '-200px', right: '-200px' }}
        as={motion.div}
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 12,
          ease: "easeInOut"
        }}
      />
      <Shape 
        style={{ width: '300px', height: '300px', bottom: '-150px', left: '-150px' }}
        as={motion.div}
        animate={{ 
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}
        transition={{ 
          repeat: Infinity,
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      <div className="container">
        <CTAContent>
          <CTATitle
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Start Your Financial Journey?
          </CTATitle>
          <CTAText
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our team of financial experts is ready to help you find the perfect loan or insurance solution tailored to your specific needs. Contact us today to get started!
          </CTAText>
          <CTAButtons
            variants={slideInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Button 
              as={Link} 
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </Button>
            <Button 
              as={Link} 
              to="/services"
              secondary
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </Button>
          </CTAButtons>
        </CTAContent>
      </div>
    </CTASection>
  );
};

export default CallToAction; 