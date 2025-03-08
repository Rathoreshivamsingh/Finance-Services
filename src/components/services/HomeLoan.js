import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fadeIn, slideInLeft, slideInRight } from '../../utils/animations';

const ServiceSection = styled.section`
  padding: 80px 0;
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
`;

const ServiceContent = styled(motion.div)`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-row: 2;
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

const ServiceFeatures = styled.div`
  margin-top: 30px;
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.secondary};
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  
  &:before {
    content: '✓';
    color: ${props => props.theme.colors.accent};
    margin-right: 10px;
    font-weight: bold;
  }
`;

const ServiceTable = styled.div`
  margin-top: 40px;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  }
  
  th {
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
  
  tr:nth-child(even) {
    background-color: ${props => props.theme.colors.lightGray};
  }
`;

const HomeLoan = () => {
  return (
    <ServiceSection>
      <div className="container">
        <ServiceContainer>
          <ServiceImage
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img src="/assets/images/home-loan-detail.jpg" alt="Home Loan" />
          </ServiceImage>
          
          <ServiceContent
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceTitle>Home Loans</ServiceTitle>
            <ServiceDescription>
              Our home loans are designed to help you achieve your dream of owning a home. 
              Whether you're a first-time buyer or looking to refinance, we offer competitive 
              interest rates and flexible repayment options tailored to your financial situation.
            </ServiceDescription>
            <ServiceDescription>
              With our streamlined application process and dedicated loan officers, 
              we make the home buying experience as smooth and stress-free as possible.
            </ServiceDescription>
            
            <ServiceFeatures>
              <FeatureTitle>Key Benefits</FeatureTitle>
              <FeatureList>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Competitive interest rates starting from 3.5% p.a.
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Loan terms up to 30 years for maximum flexibility
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Low down payment options for qualified borrowers
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  No prepayment penalties
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Fast approval process, typically within 3-5 business days
                </FeatureItem>
              </FeatureList>
            </ServiceFeatures>
            
            <ServiceTable>
              <FeatureTitle>Loan Options</FeatureTitle>
              <Table>
                <thead>
                  <tr>
                    <th>Loan Type</th>
                    <th>Interest Rate</th>
                    <th>Max Loan Amount</th>
                    <th>Term</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Fixed Rate</td>
                    <td>3.5% - 4.5%</td>
                    <td>$1,000,000</td>
                    <td>15-30 years</td>
                  </tr>
                  <tr>
                    <td>Adjustable Rate</td>
                    <td>3.0% - 4.0%</td>
                    <td>$1,500,000</td>
                    <td>5/1, 7/1, 10/1</td>
                  </tr>
                  <tr>
                    <td>FHA Loan</td>
                    <td>3.25% - 4.25%</td>
                    <td>$765,600</td>
                    <td>15-30 years</td>
                  </tr>
                  <tr>
                    <td>VA Loan</td>
                    <td>3.0% - 4.0%</td>
                    <td>No limit</td>
                    <td>15-30 years</td>
                  </tr>
                </tbody>
              </Table>
            </ServiceTable>
          </ServiceContent>
        </ServiceContainer>
      </div>
    </ServiceSection>
  );
};

export default HomeLoan; 