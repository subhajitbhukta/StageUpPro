import React, { useEffect, useState } from 'react';
import Navbar from './Navbar.jsx';
import HeroSection from './HeroSection.jsx';
import AboutSection from './About.jsx';
import CoursesSection from './Courses.jsx';
import Footer from './Footer.jsx';
import EnrollmentForm from './EnrollmentForm.jsx';


const Core=()=> {
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
    <div className="min-h-screen bg-gray-50 overflow-hidden">
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
export default Core;