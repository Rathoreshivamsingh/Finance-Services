import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all ${props => props.theme.transitions.standard};
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-5px);
  }
`;

const CardImage = styled.div`
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.primary};
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.gray};
  margin-bottom: 20px;
  flex-grow: 1;
`;

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CardLink = styled(Link)`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  display: flex;
  align-items: center;
  transition: color ${props => props.theme.transitions.standard};
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
  
  svg {
    margin-left: 5px;
  }
`;

const ServiceCard = ({ image, title, description, link, features }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <CardImage>
        <img src={image} alt={title} />
      </CardImage>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        {features && (
          <ul style={{ marginBottom: '20px' }}>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        <CardFooter>
          <CardLink to={link}>
            Learn More
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z" fill="currentColor"/>
            </svg>
          </CardLink>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;