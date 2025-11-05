import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';


const HeroSection = ({ onEnrollClick, scrollToSection }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [slideDirection, setSlideDirection] = useState('next');
  const timerRef = useRef(null);

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
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        setSlideDirection('next');
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000);
    }
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, heroSlides.length]);

  const nextSlide = () => {
    setSlideDirection('next');
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setSlideDirection('prev');
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (idx) => {
    setSlideDirection(idx > currentSlide ? 'next' : 'prev');
    setCurrentSlide(idx);
  };

  const certifications = [
    { 
      image: 'https://www.arenasolutions.com/wp-content/uploads/what-is-iso-9001-compliance.png',
      alt: 'ISO Certified',
      title: 'ISO Certified'
    },
    { 
      image: 'https://5.imimg.com/data5/SELLER/Default/2020/8/PQ/PG/RM/111471935/msme-registration-service-500x500.jpg',
      alt: 'MSME Registered',
      title: 'MSME Registered'
    },
    { 
      image: 'https://gowindinternational.com/wp-content/uploads/2025/05/DGFT.png',
      alt: 'DGFT Certified',
      title: 'DGFT Certified'
    },
    { 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCrpzGPB9h0k5isIKYD23fFFP8u9CatVGA2c2-rmaTrDX5wRAjvfOMojrglo7PxSiduM&usqp=CAU',
      alt: 'NCS Accredited',
      title: 'NCS Accredited'
    }
  ];

  const getSlideClasses = (idx) => {
    if (idx === currentSlide) {
      return 'opacity-100 translate-x-0 scale-100 z-20';
    }
    
    if (slideDirection === 'next') {
      return idx < currentSlide 
        ? 'opacity-0 -translate-x-full scale-95 z-10' 
        : 'opacity-0 translate-x-full scale-95 z-10';
    } else {
      return idx > currentSlide 
        ? 'opacity-0 translate-x-full scale-95 z-10' 
        : 'opacity-0 -translate-x-full scale-95 z-10';
    }
  };

  return (
    <>
      <section 
        id="home" 
        className="pt-20 relative overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-orange-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-[650px] md:h-[650px]">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-700 ease-in-out ${getSlideClasses(idx)}`}
            >
              <div className="flex flex-col md:grid md:grid-cols-2 gap-6 items-center md:h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="relative h-[220px] md:h-[500px] w-full md:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 via-blue-400/20 to-orange-400/20 rounded-3xl transform rotate-3 transition-transform duration-700"></div>
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl transition-transform duration-700" 
                  />
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
                  <div className="flex items-center w-fit bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg h-9 mx-auto md:mx-0 animate-fadeIn">
                    {slide.badge}
                  </div>
                  <h1 className="text-2xl md:text-6xl font-bold text-gray-900 leading-tight min-h-[50px] md:min-h-[200px] text-center md:text-left px-2 md:px-0 animate-fadeIn">
                    {slide.title}
                  </h1>
                  <p className="text-sm md:text-xl text-gray-700 min-h-[40px] md:min-h-[56px] text-center md:text-left px-2 md:px-0 animate-fadeIn">
                    {slide.subtitle}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center md:justify-start px-2 md:px-0 animate-fadeIn">
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

          <button 
            onClick={prevSlide} 
            className="absolute mt-4 left-1 md:left-4 top-[40%] md:top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full transition-all shadow-lg hover:scale-110"
          >
            <ChevronLeft size={18} className="md:hidden" />
            <ChevronLeft size={24} className="hidden md:block" />
          </button>
          <button 
            onClick={nextSlide} 
            className="absolute mt-4 right-1 md:right-4 top-[40%] md:top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full transition-all shadow-lg hover:scale-110"
          >
            <ChevronRight size={18} className="md:hidden" />
            <ChevronRight size={24} className="hidden md:block" />
          </button>

          <div className="absolute bottom-16 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 md:h-2 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? 'bg-orange-500 w-6 md:w-8' 
                    : 'bg-gray-400 w-2 md:w-3 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {isHovered && (
            <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-30 animate-fadeIn">
              Paused
            </div>
          )}
        </div>
      </section>

      <section className="py-3 bg-gradient-to-br from-slate-200 via-slate-400 to-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-16">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-all duration-500"></div>
                  <div className="sm:w-16 sm:h-16 h-10 w-10 overflow-hidden  rounded-full bg-gradient-to-br from-white to-gray-100 border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center shadow-2xl hover:shadow-blue-500/20 relative transform group-hover:scale-110 group-hover:-translate-y-1">
                    <img 
                      src={cert.image} 
                      alt={cert.alt} 
                      className="w-full h-full object-contain filter group-hover:brightness-110"
                      title={cert.title}
                    />
                  </div>
                </div>
                <span className="text-[9px] md:text-sm font-bold text-white group-hover:text-white text-center transition-colors duration-300">
                  <i>{cert.title}</i></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </>
  );
};
export default HeroSection;