import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../../utils/animations';

const AboutSection = styled.section`
  background-color: ${props => props.theme.colors.light};
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-row: 1;
  }
`;

const AboutContent = styled(motion.div)`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-row: 2;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const AboutSubtitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondary};
`;

const AboutText = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.gray};
`;

const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 30px;
`;

const FeatureItem = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  
  svg {
    color: ${props => props.theme.colors.accent};
    font-size: 24px;
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

const FeatureText = styled.div`
  h4 {
    font-size: 18px;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.dark};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
`;

const AboutContentComponent = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContainer>
          <AboutImage
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src="/assets/images/about-us.jpg" alt="About FinanceHub" />
          </AboutImage>
          
          <AboutContent
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <AboutTitle>About FinanceHub</AboutTitle>
            <AboutSubtitle>Your Trusted Financial Partner Since 2005</AboutSubtitle>
            <AboutText>
              FinanceHub is a leading financial services provider specializing in home loans, education loans, business loans, and insurance solutions. With over 15 years of experience in the industry, we have helped thousands of clients achieve their financial goals.
            </AboutText>
            <AboutText>
              Our mission is to provide accessible, transparent, and personalized financial services that empower our clients to make informed decisions about their financial future. We believe in building long-term relationships based on trust, integrity, and exceptional service.
            </AboutText>
            
            <AboutFeatures>
              <FeatureItem
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
                <FeatureText>
                  <h4>Expert Advisors</h4>
                  <p>Our team of certified financial advisors provides expert guidance.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="currentColor" />
                </svg>
                <FeatureText>
                  <h4>Tailored Solutions</h4>
                  <p>Customized financial solutions to meet your specific needs.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H17V6C17 3.24 14.76 1 12 1C9.24 1 7 3.24 7 6V8H6C4.9 8 4 8.9 4 10V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V10C20 8.9 19.1 8 18 8ZM12 17C10.9 17 10 16.1 10 15C10 13.9 10.9 13 12 13C13.1 13 14 13.9 14 15C14 16.1 13.1 17 12 17ZM15 8H9V6C9 4.34 10.34 3 12 3C13.66 3 15 4.34 15 6V8Z" fill="currentColor" />
                </svg>
                <FeatureText>
                  <h4>Secure Process</h4>
                  <p>Your financial information is always protected with us.</p>
                </FeatureText>
              </FeatureItem>
              
              <FeatureItem
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="currentColor" />
                </svg>
                <FeatureText>
                  <h4>Fast Approvals</h4>
                  <p>Quick loan approval process to save your valuable time.</p>
                </FeatureText>
              </FeatureItem>
            </AboutFeatures>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default AboutContentComponent; 