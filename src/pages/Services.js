import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeIn, staggerContainer } from '../utils/animations';

const ServicesHero = styled.section`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secondary} 100%);
  color: ${props => props.theme.colors.white};
  padding: 120px 0 80px;
  text-align: center;
`;

const ServicesHeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 36px;
  }
`;

const ServicesHeroText = styled.p`
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.9;
`;

const ServicesGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 80px 0;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: all ${props => props.theme.transitions.standard};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const ServiceCardImage = styled.div`
  height: 250px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ServiceCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ServiceCardContent = styled.div`
  padding: 30px;
`;

const ServiceCardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.primary};
`;

const ServiceCardDescription = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 20px;
`;

const ServiceCardButton = styled(Link)`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 600;
  transition: background-color ${props => props.theme.transitions.standard};
  
  &:hover {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Home Loans',
      description: 'Get the best home loan options with competitive interest rates and flexible repayment terms. Whether you\'re a first-time buyer or looking to refinance, we have the right solution for you.',
      image: '/assets/images/home-loan.jpg',
      link: '/services/home-loan'
    },
    {
      id: 2,
      title: 'Education Loans',
      description: 'Invest in your future with our education loans designed to support your academic aspirations. We offer flexible financing options for undergraduate, graduate, and professional studies.',
      image: '/assets/images/education-loan.jpg',
      link: '/services/education-loan'
    },
    {
      id: 3,
      title: 'Business Loans',
      description: 'Fuel your business growth with our tailored business financing solutions. Whether you\'re a startup looking for initial capital, or an established business planning expansion, we\'ve got you covered.',
      image: '/assets/images/business-loan.jpg',
      link: '/services/business-loan'
    },
    {
      id: 4,
      title: 'Insurance Services',
      description: 'Protect what matters most with our comprehensive insurance coverage options. We offer a wide range of insurance products designed to provide financial security and peace of mind.',
      image: '/assets/images/insurance.jpg',
      link: '/services/insurance'
    }
  ];

  return (
    <main>
      <ServicesHero>
        <div className="container">
          <ServicesHeroTitle>Our Financial Services</ServicesHeroTitle>
          <ServicesHeroText>
            Explore our comprehensive range of financial solutions designed to help you achieve your goals and secure your future.
          </ServicesHeroText>
        </div>
      </ServicesHero>
      
      <div className="container">
        <ServicesGrid
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {services.map(service => (
            <ServiceCard
              key={service.id}
              variants={fadeIn}
            >
              <ServiceCardImage>
                <img src={service.image} alt={service.title} />
              </ServiceCardImage>
              <ServiceCardContent>
                <ServiceCardTitle>{service.title}</ServiceCardTitle>
                <ServiceCardDescription>{service.description}</ServiceCardDescription>
                <ServiceCardButton to={service.link}>Learn More</ServiceCardButton>
              </ServiceCardContent>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </div>
    </main>
  );
};

export default Services; 