import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ServiceCard from '../common/ServiceCard';
import { staggerContainer, fadeIn } from '../../utils/animations';

const ServicesSection = styled.section`
  background-color: ${props => props.theme.colors.light};
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  text-align: center;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.primary};
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 50px;
  color: ${props => props.theme.colors.gray};
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Home Loans',
      description: 'Get the best home loan options with competitive interest rates and flexible repayment terms.',
      image: '/assets/images/home-loan.jpg',
      link: '/services/home-loan',
      features: [
        'Low interest rates',
        'Flexible repayment options',
        'Quick approval process'
      ]
    },
    {
      id: 2,
      title: 'Education Loans',
      description: 'Invest in your future with our education loans designed to support your academic aspirations.',
      image: '/assets/images/education-loan.jpg',
      link: '/services/education-loan',
      features: [
        'No collateral for small loans',
        'Repayment starts after course completion',
        'Cover tuition and living expenses'
      ]
    },
    {
      id: 3,
      title: 'Business Loans',
      description: 'Fuel your business growth with our tailored business financing solutions.',
      image: '/assets/images/business-loan.jpg',
      link: '/services/business-loan',
      features: [
        'Working capital loans',
        'Equipment financing',
        'Business expansion loans'
      ]
    },
    {
      id: 4,
      title: 'Insurance',
      description: 'Protect what matters most with our comprehensive insurance coverage options.',
      image: '/assets/images/insurance.jpg',
      link: '/services/insurance',
      features: [
        'Life insurance',
        'Health insurance',
        'Property insurance'
      ]
    }
  ];

  return (
    <ServicesSection id="services">
      <div className="container">
        <SectionTitle
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Our Financial Services
        </SectionTitle>
        <SectionSubtitle
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Explore our range of financial solutions designed to meet your specific needs and help you achieve your goals.
        </SectionSubtitle>
        
        <ServicesGrid
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              link={service.link}
              features={service.features}
            />
          ))}
        </ServicesGrid>
      </div>
    </ServicesSection>
  );
};

export default Services; 