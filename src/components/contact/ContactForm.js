import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../common/Button';
import { fadeIn, slideInLeft, slideInRight } from '../../utils/animations';

const ContactSection = styled.section`
  background-color: ${props => props.theme.colors.light};
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const ContactText = styled.p`
  margin-bottom: 30px;
  color: ${props => props.theme.colors.gray};
`;

const ContactDetails = styled.div`
  margin-top: 40px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 25px;
  
  svg {
    color: ${props => props.theme.colors.primary};
    font-size: 24px;
    margin-right: 15px;
    flex-shrink: 0;
  }
`;

const ContactItemContent = styled.div`
  h4 {
    font-size: 18px;
    margin-bottom: 5px;
    color: ${props => props.theme.colors.dark};
  }
  
  p {
    color: ${props => props.theme.colors.gray};
  }
`;

const ContactMap = styled.div`
  margin-top: 40px;
  height: 250px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const FormContainer = styled(motion.div)`
  background-color: ${props => props.theme.colors.white};
  padding: 40px;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    order: 1;
  }
`;

const FormTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary};
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
  color: ${props => props.theme.colors.dark};
`;

const FormInput = styled.input`
  padding: 12px 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 16px;
  transition: border-color ${props => props.theme.transitions.standard};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  min-height: 150px;
  transition: border-color ${props => props.theme.transitions.standard};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  
  return (
    <ContactSection id="contact">
      <div className="container">
        <ContactContainer>
          <ContactInfo
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ContactTitle>Get In Touch</ContactTitle>
            <ContactText>
              Have questions about our loan services or insurance options? Our team is here to help. Contact us using the form or reach out directly through the contact information below.
            </ContactText>
            
            <ContactDetails>
              <ContactItem>
                <FaPhone />
                <ContactItemContent>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <FaEnvelope />
                <ContactItemContent>
                  <h4>Email</h4>
                  <p>info@financehub.com</p>
                  <p>support@financehub.com</p>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <FaMapMarkerAlt />
                <ContactItemContent>
                  <h4>Office</h4>
                  <p>123 Finance Street, New York</p>
                  <p>NY 10001, United States</p>
                </ContactItemContent>
              </ContactItem>
            </ContactDetails>
            
            <ContactMap>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304605!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564562986!5m2!1sen!2s" 
                allowFullScreen="" 
                loading="lazy"
                title="Office Location"
              ></iframe>
            </ContactMap>
          </ContactInfo>
          
          <FormContainer
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <FormTitle>Send Us a Message</FormTitle>
            
            {isSubmitted && (
              <SuccessMessage
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you for your message! We'll get back to you soon.
              </SuccessMessage>
            )}
            
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="phone">Phone Number</FormLabel>
                <FormInput 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <Button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </Button>
            </Form>
          </FormContainer>
        </ContactContainer>
      </div>
    </ContactSection>
  );
};

export default ContactForm; 