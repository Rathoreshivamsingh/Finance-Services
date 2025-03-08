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

const LoanTypes = styled.div`
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const LoanTypeCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all ${props => props.theme.transitions.standard};
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-5px);
  }
  
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0;
  }
`;

const BusinessLoan = () => {
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
            <img src="/assets/images/business-loan-detail.jpg" alt="Business Loan" />
          </ServiceImage>
          
          <ServiceContent
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceTitle>Business Loans</ServiceTitle>
            <ServiceDescription>
              Fuel your business growth with our tailored business financing solutions. 
              Whether you're a startup looking for initial capital, or an established business 
              planning expansion, our business loans provide the financial support you need.
            </ServiceDescription>
            <ServiceDescription>
              We understand that every business is unique, which is why we offer customized 
              loan options with competitive interest rates and flexible repayment terms to 
              suit your specific business needs.
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
                  Competitive interest rates starting from 5.0% p.a.
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Loan amounts from $10,000 to $5 million
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Flexible repayment terms up to 15 years
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Quick approval process with minimal documentation
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  No prepayment penalties
                </FeatureItem>
              </FeatureList>
            </ServiceFeatures>
            
            <LoanTypes>
              <LoanTypeCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4>Working Capital Loans</h4>
                <p>Short-term financing to cover day-to-day operational expenses like payroll, rent, and inventory.</p>
              </LoanTypeCard>
              
              <LoanTypeCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4>Equipment Financing</h4>
                <p>Loans specifically designed to help businesses purchase equipment, machinery, or vehicles.</p>
              </LoanTypeCard>
              
              <LoanTypeCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4>Business Expansion Loans</h4>
                <p>Long-term financing for expanding your business, opening new locations, or entering new markets.</p>
              </LoanTypeCard>
              
              <LoanTypeCard
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <h4>SBA Loans</h4>
                <p>Government-backed loans with favorable terms for small businesses that might not qualify for conventional loans.</p>
              </LoanTypeCard>
            </LoanTypes>
            
            <ServiceTable>
              <FeatureTitle>Loan Options</FeatureTitle>
              <Table>
                <thead>
                  <tr>
                    <th>Loan Type</th>
                    <th>Interest Rate</th>
                    <th>Loan Amount</th>
                    <th>Term</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Working Capital</td>
                    <td>5.0% - 8.0%</td>
                    <td>$10K - $500K</td>
                    <td>1-5 years</td>
                  </tr>
                  <tr>
                    <td>Equipment Financing</td>
                    <td>4.5% - 7.5%</td>
                    <td>$10K - $1M</td>
                    <td>2-7 years</td>
                  </tr>
                  <tr>
                    <td>Business Expansion</td>
                    <td>5.5% - 9.0%</td>
                    <td>$50K - $5M</td>
                    <td>5-15 years</td>
                  </tr>
                  <tr>
                    <td>SBA Loans</td>
                    <td>6.0% - 8.5%</td>
                    <td>$50K - $5M</td>
                    <td>10-25 years</td>
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

export default BusinessLoan; 