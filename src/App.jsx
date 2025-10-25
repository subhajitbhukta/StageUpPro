import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/About.jsx';
import CoursesSection from './components/Courses.jsx';
import Footer from './components/Footer.jsx';
import EnrollmentForm from './components/EnrollmentForm.jsx';


const App=()=> {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        scrolled={scrolled}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        onEnrollClick={() => setShowEnrollForm(true)}
      />

      <EnrollmentForm 
        showForm={showEnrollForm}
        onClose={() => setShowEnrollForm(false)}
      />

      <HeroSection 
        onEnrollClick={() => setShowEnrollForm(true)}
        scrollToSection={scrollToSection}
      />

      <AboutSection />
      <CoursesSection />
      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}
export default App;