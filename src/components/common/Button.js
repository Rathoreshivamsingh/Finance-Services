import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  background-color: ${props => props.secondary ? props.theme.colors.secondary : props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.small ? '8px 16px' : '12px 24px'};
  border-radius: 4px;
  font-size: ${props => props.small ? '14px' : '16px'};
  font-weight: 600;
  display: inline-block;
  transition: all ${props => props.theme.transitions.standard};
  box-shadow: ${props => props.theme.shadows.small};
  
  &:hover {
    background-color: ${props => props.secondary 
      ? props.theme.colors.primary 
      : props.theme.colors.secondary};
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-2px);
  }
`;

export default Button;