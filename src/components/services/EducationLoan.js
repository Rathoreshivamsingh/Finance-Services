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
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const EligibilitySection = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
`;

const EducationLoan = () => {
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
            <img src="/assets/images/education-loan-detail.jpg" alt="Education Loan" />
          </ServiceImage>
          
          <ServiceContent
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceTitle>Education Loans</ServiceTitle>
            <ServiceDescription>
              Invest in your future with our education loans designed to support your academic aspirations. 
              We offer flexible financing options for undergraduate, graduate, and professional studies 
              at accredited institutions worldwide.
            </ServiceDescription>
            <ServiceDescription>
              Our education loans feature competitive interest rates, flexible repayment terms, 
              and no collateral requirements for smaller loan amounts, making it easier for you 
              to focus on your studies without financial stress.
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
                  Competitive interest rates starting from 4.5% p.a.
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  No repayment required during study period
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Cover tuition fees, living expenses, books, and equipment
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  No collateral required for loans up to $50,000
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Tax benefits on interest paid as per applicable laws
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
                    <th>Repayment Period</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Undergraduate Studies</td>
                    <td>4.5% - 6.0%</td>
                    <td>$75,000</td>
                    <td>Up to 10 years</td>
                  </tr>
                  <tr>
                    <td>Graduate Studies</td>
                    <td>5.0% - 6.5%</td>
                    <td>$100,000</td>
                    <td>Up to 15 years</td>
                  </tr>
                  <tr>
                    <td>Professional Courses</td>
                    <td>5.5% - 7.0%</td>
                    <td>$150,000</td>
                    <td>Up to 15 years</td>
                  </tr>
                  <tr>
                    <td>Study Abroad</td>
                    <td>6.0% - 7.5%</td>
                    <td>$200,000</td>
                    <td>Up to 15 years</td>
                  </tr>
                </tbody>
              </Table>
            </ServiceTable>
            
            <EligibilitySection>
              <FeatureTitle>Eligibility Criteria</FeatureTitle>
              <FeatureList>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Admission to an accredited educational institution
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Satisfactory academic record
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  Co-applicant (parent/guardian) with stable income for students without income
                </FeatureItem>
                <FeatureItem
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  U.S. citizenship or permanent residency
                </FeatureItem>
              </FeatureList>
            </EligibilitySection>
          </ServiceContent>
        </ServiceContainer>
      </div>
    </ServiceSection>
  );
};

export default EducationLoan; 