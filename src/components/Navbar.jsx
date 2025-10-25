import React, { useState } from 'react';
import { Code, Menu, X } from 'lucide-react';
import logo from '../assets/stageup_pro_logo.png'


const Navbar = ({ scrolled, activeSection, scrollToSection, onEnrollClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative group cursor-pointer">
              <div className="flex items-center space-x-3">
                <img src={logo} alt="StageUp Pro" className="h-16  w-auto" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'courses', 'about', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors capitalize ${activeSection === item ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={onEnrollClick}
            className="hidden md:block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all transform hover:scale-105"
          >
            Enroll Now
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {['home', 'courses', 'about', 'contact'].map(item => (
              <button
                key={item}
                onClick={() => { scrollToSection(item); setIsMenuOpen(false); }}
                className="block w-full text-left py-2 text-gray-700 hover:text-orange-500 capitalize"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => { onEnrollClick(); setIsMenuOpen(false); }}
              className="w-full bg-orange-500 text-white py-2 rounded-lg"
            >
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;

