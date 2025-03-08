import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/Theme';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import HomeLoanPage from './pages/HomeLoanPage';
import EducationLoanPage from './pages/EducationLoanPage';
import BusinessLoanPage from './pages/BusinessLoanPage';
import InsurancePage from './pages/InsurancePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/home-loan" element={<HomeLoanPage />} />
          <Route path="/services/education-loan" element={<EducationLoanPage />} />
          <Route path="/services/business-loan" element={<BusinessLoanPage />} />
          <Route path="/services/insurance" element={<InsurancePage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
