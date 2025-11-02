import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';


const HeroSection = ({ onEnrollClick, scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      title: 'Master Coding, Build Your Future',
      subtitle: 'Trusted by 100+ students — learn job-ready skills, get industry certification, and accelerate your hiring chances.',
      badge: 'ISO Certified Institute 🏆'
    },
    {
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop',
      title: 'Learn From Industry Experts',
      subtitle: '3+ years of excellence in tech education — practical, project-based learning with real mentors.',
      badge: 'Expert Mentors 👨‍🏫'
    },
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop',
      title: 'Real-World Internship Projects',
      subtitle: 'Gain hands-on experience with live industry projects and certifications',
      badge: 'Live Projects 💼'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

const stats = [
  { value: 'Project Based Learning', label: '' },
  { value: 'One to One Mentorship', label: '' },
  { value: 'Practice with real apps', label: '' },
  { value: 'Build Job Ready Skills', label: '' }
];


  return (
    <>
      <section id="home" className="pt-20 relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
        <div className="relative h-[650px] md:h-[650px]">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ${idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}
            >
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center md:h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="relative h-[220px] md:h-[500px] w-full md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-400/20 to-orange-400/20 rounded-3xl transform rotate-3"></div>
                  <img src={slide.image} alt={slide.title} className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl" />
                  <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl z-20 hidden md:block">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full">
                        <CheckCircle className="text-white" size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-2xl text-gray-900">95%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mt-8 md:space-y-6 z-20 md:order-1 w-full">
                  <div className="flex items-center w-fit bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg h-9 mx-auto md:mx-0">
                    {slide.badge}
                  </div>
                  <h1 className="text-2xl md:text-6xl font-bold text-gray-900 leading-tight min-h-[50px] md:min-h-[200px] text-center md:text-left px-2 md:px-0">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-xl text-gray-700 min-h-[40px] md:min-h-[56px] text-center md:text-left px-2 md:px-0">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start px-2 md:px-0">
                    <button
                      onClick={onEnrollClick}
                      className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 md:px-8 py-2.5 md:py-4 text-sm md:text-base rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
                    >
                      Get Started <ChevronRight size={18} className="md:hidden" /><ChevronRight size={20} className="hidden md:block" />
                    </button>
                    <button
                      onClick={() => scrollToSection('courses')}
                      className="border-2 border-gray-800 text-gray-800 px-5 md:px-8 py-2.5 md:py-4 text-sm md:text-base rounded-full font-semibold hover:bg-gray-800 hover:text-white transition-all"
                    >
                      View Courses
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <button onClick={prevSlide} className="absolute mt-4 left-1 md:left-4 top-[40%] md:top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full transition-all shadow-lg">
            <ChevronLeft size={18} className="md:hidden" />
            <ChevronLeft size={24} className="hidden md:block" />
          </button>
          <button onClick={nextSlide} className="absolute mt-4 right-1 md:right-4 top-[40%] md:top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full transition-all shadow-lg">
            <ChevronRight size={18} className="md:hidden" />
            <ChevronRight size={24} className="hidden md:block" />
          </button>

          <div className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 md:h-2 rounded-full transition-all ${idx === currentSlide ? 'bg-orange-500 w-6 md:w-8' : 'bg-gray-400 w-2 md:w-3'}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-4 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition-transform">
                <div className="text-md font-bold text-white ">{stat.value}</div>
                {/* <div className="text-white/90 font-medium">{stat.label}</div> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;