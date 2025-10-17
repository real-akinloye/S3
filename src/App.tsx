import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import { HeroSection } from './components/hero-section';
import { AboutSection } from './components/about-section';
import { ServicesSection } from './components/services-section';

import { TestimonialsSection } from './components/testimonials-section';
import { WhyChooseSection } from './components/why-choose-section';
import Contact from './pages/contact';
import About from './pages/about';
import Services from './pages/services';


function Home() {
  return (
  <div className="min-h-screen font-poppins bg-transparent">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WhyChooseSection />
      <ServicesSection />
      <TestimonialsSection />
      {/* <ContactSection /> */}
  <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-poppins bg-transparent flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<div><Services /></div>} />
        </Routes>
  {/* Footer is rendered inside Home and other pages, so only one Footer is needed. */}
      </div>
    </Router>
  );
}

export default App;
