import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from './Button';
import { fadeIn, slideInUp } from '../../utils/animations';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.white};
  padding: 60px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 25px;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: ${props => props.theme.colors.accent};
  }
`;

const FooterLink = styled(Link)`
  margin-bottom: 15px;
  transition: color ${props => props.theme.transitions.standard};
  
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  
  svg {
    margin-right: 10px;
    color: ${props => props.theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SocialIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  margin-right: 10px;
  transition: all ${props => props.theme.transitions.standard};
  
  &:hover {
    background-color: ${props => props.theme.colors.accent};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
`;

const CTASection = styled(motion.div)`
  background-color: ${props => props.theme.colors.primary};
  padding: 30px;
  border-radius: 8px;
  margin-bottom: 40px;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const CTATitle = styled.h3`
  font-size: 24px;
  margin-bottom: 15px;
`;

const CTAText = styled.p`
  margin-bottom: 20px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <CTASection
          variants={slideInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CTATitle>Ready to get started with your financial journey?</CTATitle>
          <CTAText>Contact us today to learn more about our loan and insurance services.</CTAText>
          <Button as={Link} to="/contact" whileHover={{ scale: 1.05 }}>
            Contact Us
          </Button>
        </CTASection>
        
        <FooterContent>
          <FooterColumn
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FooterTitle>FinanceHub</FooterTitle>
            <p>Providing reliable financial solutions for all your needs. We offer a wide range of loan and insurance services to help you achieve your financial goals.</p>
            <SocialLinks>
              <SocialIcon to="#"><FaFacebook /></SocialIcon>
              <SocialIcon to="#"><FaTwitter /></SocialIcon>
              <SocialIcon to="#"><FaLinkedin /></SocialIcon>
              <SocialIcon to="#"><FaInstagram /></SocialIcon>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FooterTitle>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterColumn>
          
          <FooterColumn
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FooterTitle>Our Services</FooterTitle>
            <FooterLink to="/services/home-loan">Home Loan</FooterLink>
            <FooterLink to="/services/education-loan">Education Loan</FooterLink>
            <FooterLink to="/services/business-loan">Business Loan</FooterLink>
            <FooterLink to="/services/insurance">Insurance</FooterLink>
          </FooterColumn>
          
          <FooterColumn
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FooterTitle>Contact Info</FooterTitle>
            <ContactItem>
              <FaMapMarkerAlt />
              <span>123 Finance Street, New York, NY 10001</span>
            </ContactItem>
            <ContactItem>
              <FaPhone />
              <span>+1 (555) 123-4567</span>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <span>info@financehub.com</span>
            </ContactItem>
          </FooterColumn>
        </FooterContent>
        
        <Copyright>
          &copy; {new Date().getFullYear()} FinanceHub. All rights reserved.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;