import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../../utils/animations';

const ServiceSection = styled.section`
  padding: 80px 0;
  background-color: ${props => props.theme.colors.light};
`;

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceImage = styled(motion.div)`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-row: 1;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const ServiceContent = styled(motion.div)`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-row: 2;
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const ServiceTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const ServiceDescription = styled.p`
  margin-bottom: 20px;
  color: ${props => props.theme.colors.gray};
`;

const InsuranceTypes = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const InsuranceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  padding: 25px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all ${props => props.theme.transitions.standard};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-5px);
  }
`;

const InsuranceIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(0, 86, 179, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  svg {
    width: 30px;
    height: 30px;
    color: ${props => props.theme.colors.primary};
  }
`;

const InsuranceTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.primary};
`;

const InsuranceText = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 15px;
`;

const InsuranceFeatures = styled.ul`
  list-style: none;
  padding: 0;
`;

const InsuranceFeature = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${props => props.theme.colors.gray};
  
  &:before {
    content: '✓';
    color: ${props => props.theme.colors.accent};
    margin-right: 10px;
    font-weight: bold;
  }
`;

const WhyChooseUs = styled.div`
  margin-top: 50px;
  background-color: ${props => props.theme.colors.white};
  padding: 30px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
`;

const WhyChooseTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
  text-align: center;
`;

const WhyChooseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const WhyChooseItem = styled(motion.div)`
  text-align: center;
  
  h4 {
    font-size: 18px;
    margin: 15px 0 10px;
    color: ${props => props.theme.colors.secondary};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
`;

const Insurance = () => {
  return (
    <ServiceSection>
      <div className="container">
        <ServiceContainer>
          <ServiceImage
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src="/assets/images/insurance-detail.jpg" alt="Insurance Services" />
          </ServiceImage>
          
          <ServiceContent
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceTitle>Insurance Services</ServiceTitle>
            <ServiceDescription>
              Protect what matters most with our comprehensive insurance coverage options. 
              We offer a wide range of insurance products designed to provide financial security 
              and peace of mind for you, your family, and your assets.
            </ServiceDescription>
            <ServiceDescription>
              Our team of experienced insurance advisors will help you understand your risks 
              and recommend the right coverage to ensure you're adequately protected against 
              life's uncertainties.
            </ServiceDescription>
            
            <InsuranceTypes>
              <InsuranceCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <InsuranceIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" fill="currentColor" />
                  </svg>
                </InsuranceIcon>
                <InsuranceTitle>Life Insurance</InsuranceTitle>
                <InsuranceText>
                  Provide financial security for your loved ones in the event of your untimely death.
                </InsuranceText>
                <InsuranceFeatures>
                  <InsuranceFeature>Term life insurance</InsuranceFeature>
                  <InsuranceFeature>Whole life insurance</InsuranceFeature>
                  <InsuranceFeature>Universal life insurance</InsuranceFeature>
                  <InsuranceFeature>Variable life insurance</InsuranceFeature>
                </InsuranceFeatures>
              </InsuranceCard>
              
              <InsuranceCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <InsuranceIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 14H14V18H10V14H6V10H10V6H14V10H18V14Z" fill="currentColor" />
                  </svg>
                </InsuranceIcon>
                <InsuranceTitle>Health Insurance</InsuranceTitle>
                <InsuranceText>
                  Cover medical expenses and ensure access to quality healthcare services.
                </InsuranceText>
                <InsuranceFeatures>
                  <InsuranceFeature>Individual health plans</InsuranceFeature>
                  <InsuranceFeature>Family health plans</InsuranceFeature>
                  <InsuranceFeature>Critical illness coverage</InsuranceFeature>
                  <InsuranceFeature>Hospital cash benefits</InsuranceFeature>
                </InsuranceFeatures>
              </InsuranceCard>
              
              <InsuranceCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <InsuranceIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor" />
                  </svg>
                </InsuranceIcon>
                <InsuranceTitle>Property Insurance</InsuranceTitle>
                <InsuranceText>
                  Protect your home and belongings against damage, theft, and natural disasters.
                </InsuranceText>
                <InsuranceFeatures>
                  <InsuranceFeature>Homeowners insurance</InsuranceFeature>
                  <InsuranceFeature>Renters insurance</InsuranceFeature>
                  <InsuranceFeature>Flood insurance</InsuranceFeature>
                  <InsuranceFeature>Earthquake insurance</InsuranceFeature>
                </InsuranceFeatures>
              </InsuranceCard>
              
              <InsuranceCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <InsuranceIcon>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.29 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="currentColor" />
                  </svg>
                </InsuranceIcon>
                <InsuranceTitle>Auto Insurance</InsuranceTitle>
                <InsuranceText>
                  Get coverage for your vehicle against accidents, theft, and liability.
                </InsuranceText>
                <InsuranceFeatures>
                  <InsuranceFeature>Liability coverage</InsuranceFeature>
                  <InsuranceFeature>Collision coverage</InsuranceFeature>
                  <InsuranceFeature>Comprehensive coverage</InsuranceFeature>
                  <InsuranceFeature>Uninsured motorist coverage</InsuranceFeature>
                </InsuranceFeatures>
              </InsuranceCard>
            </InsuranceTypes>
            
            <WhyChooseUs>
              <WhyChooseTitle>Why Choose Our Insurance Services</WhyChooseTitle>
              <WhyChooseGrid>
                <WhyChooseItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#0056b3" />
                  </svg>
                  <h4>Comprehensive Coverage</h4>
                  <p>Tailored insurance solutions to protect all aspects of your life and assets.</p>
                </WhyChooseItem>
                
                <WhyChooseItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.5 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z" fill="#0056b3" />
                  </svg>
                  <h4>Competitive Premiums</h4>
                  <p>Affordable rates with flexible payment options to fit your budget.</p>
                </WhyChooseItem>
                
                <WhyChooseItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="#0056b3" />
                  </svg>
                  <h4>Fast Claims Processing</h4>
                  <p>Efficient and hassle-free claims settlement when you need it most.</p>
                </WhyChooseItem>
              </WhyChooseGrid>
            </WhyChooseUs>
          </ServiceContent>
        </ServiceContainer>
      </div>
    </ServiceSection>
  );
};

export default Insurance; 