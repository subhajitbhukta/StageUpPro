import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Award, Briefcase, Users, CheckCircle, Star, ChevronRight, BookOpen, TrendingUp, Globe, ChevronLeft, Quote, MapPin, Phone, Mail, Clock, Send, Building2 } from 'lucide-react';
import logo from './assets/stageup_pro_logo.png';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEnrollForm, setShowEnrollForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=600&fit=crop',
      title: 'Master Coding, Build Your Future',
      subtitle: 'Join 5000+ students who transformed their careers with our industry-recognized certification courses',
      badge: 'ISO Certified Institute 🏆'
    },
    {
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop',
      title: 'Learn From Industry Experts',
      subtitle: '10+ years of excellence in tech education with 95% placement rate',
      badge: 'Expert Mentors 👨‍🏫'
    },
    {
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop',
      title: 'Real-World Internship Projects',
      subtitle: 'Gain hands-on experience with live industry projects and certifications',
      badge: 'Live Projects 💼'
    }
  ];

  const placements = [
    { name: 'Rahul Sharma', company: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', package: '₹18 LPA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { name: 'Priya Patel', company: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', package: '₹16 LPA', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { name: 'Amit Kumar', company: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', package: '₹20 LPA', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { name: 'Sneha Reddy', company: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flipkart-logo.png', package: '₹14 LPA', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' },
    // { name: 'Vikas Singh', company: 'TCS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Tata_Consultancy_Services_Logo.svg', package: '₹8 LPA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop' },
    // { name: 'Ananya Iyer', company: 'Swiggy', logo: 'https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg', package: '₹12 LPA', image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop' },
    // { name: 'Karan Mehta', company: 'Infosys', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg', package: '₹7.5 LPA', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop' },
    // { name: 'Divya Shah', company: 'Wipro', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg', package: '₹7 LPA', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop' }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  const courses = [
    { title: 'Full Stack Development', duration: '6 Months', level: 'Advanced', students: '2.5k+', icon: Code, price: '₹49,999' },
    { title: 'Data Science & AI', duration: '5 Months', level: 'Intermediate', students: '1.8k+', icon: TrendingUp, price: '₹44,999' },
    { title: 'Web Development', duration: '4 Months', level: 'Beginner', students: '3.2k+', icon: Globe, price: '₹34,999' },
    { title: 'Mobile App Development', duration: '5 Months', level: 'Intermediate', students: '1.5k+', icon: Code, price: '₹39,999' },
    { title: 'DevOps & Cloud', duration: '4 Months', level: 'Advanced', students: '1.2k+', icon: Briefcase, price: '₹42,999' },
    { title: 'Cybersecurity', duration: '6 Months', level: 'Advanced', students: '980+', icon: Award, price: '₹54,999' }
  ];

  const testimonials = [
    {
      name: 'Rahul Sharma',
      role: 'Software Engineer at Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'StageUp Pro transformed my career completely. The hands-on projects and expert mentorship helped me land my dream job at Google. Best decision ever!',
      rating: 5
    },
    {
      name: 'Priya Patel',
      role: 'Full Stack Developer at Amazon',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'The quality of education and placement support is outstanding. I got placed in Amazon within 2 months of completing my course. Highly recommended!',
      rating: 5
    },
    {
      name: 'Amit Kumar',
      role: 'Data Scientist at Microsoft',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'The Data Science course here is absolutely world-class. Real projects, industry experts, and excellent career guidance made all the difference.',
      rating: 5
    },
    {
      name: 'Sneha Reddy',
      role: 'Frontend Developer at Flipkart',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'From zero coding knowledge to landing a job at Flipkart - StageUp Pro made it possible. The curriculum is perfectly aligned with industry needs.',
      rating: 5
    },
    {
      name: 'Vikas Singh',
      role: 'DevOps Engineer at TCS',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      text: 'Best institute for DevOps training! Practical approach, latest tools, and amazing placement assistance. Got my dream role thanks to StageUp Pro.',
      rating: 5
    },
    {
      name: 'Ananya Iyer',
      role: 'Mobile Developer at Swiggy',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      text: 'The Mobile App Development course exceeded all my expectations. Great mentors, real projects, and excellent job opportunities. Thank you StageUp Pro!',
      rating: 5
    }
  ];

  const features = [
    { icon: Award, title: 'ISO Certified', desc: 'Internationally recognized certification' },
    { icon: Users, title: '10+ Years Experience', desc: 'Trusted by thousands of students' },
    { icon: Briefcase, title: 'Real Projects', desc: 'Work on live industry projects' },
    { icon: BookOpen, title: 'Expert Mentors', desc: 'Learn from industry professionals' }
  ];

  const stats = [
    { value: '5000+', label: 'Students Trained' },
    { value: '95%', label: 'Placement Rate' },
    { value: '50+', label: 'Expert Mentors' },
    { value: '200+', label: 'Partner Companies' }
  ];

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for enrolling! Our team will contact you soon.');
    setShowEnrollForm(false);
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative group cursor-pointer">
                <div className="flex items-center space-x-3">
                  <img src={logo} alt="StageUp Pro" className="h-16 w-16 w-auto" />
                </div>
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              {['home', 'courses', 'about', 'contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`font-medium transition-colors capitalize ${activeSection === item ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowEnrollForm(true)}
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
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-orange-500 capitalize"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setShowEnrollForm(true)}
                className="w-full bg-orange-500 text-white py-2 rounded-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Enrollment Form Modal */}
      {showEnrollForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white relative">
              <button
                onClick={() => setShowEnrollForm(false)}
                className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <X size={24} />
              </button>
              <h2 className="text-3xl font-bold mb-2">Start Your Journey</h2>
              <p className="text-white/90">Fill in your details and we'll get back to you within 24 hours</p>
            </div>
            <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Select Course *</label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all"
                >
                  <option value="">Choose a course</option>
                  {courses.map((course, idx) => (
                    <option key={idx} value={course.title}>{course.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-all"
                  placeholder="Tell us about your goals and interests..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Submit Enrollment <Send size={20} />
              </button>
              <p className="text-sm text-gray-500 text-center">
                By submitting this form, you agree to our Terms & Conditions and Privacy Policy
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Hero Slider Section */}
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
                      onClick={() => setShowEnrollForm(true)}
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
            className="absolute mt-4 left-1 md:left-4 top-[40%] md:top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full transition-all shadow-lg"
          >
            <ChevronLeft size={18} className="md:hidden" />
            <ChevronLeft size={24} className="hidden md:block" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute mt-4 right-1 md:right-4 top-[40%] md:top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-2 md:p-3 rounded-full transition-all shadow-lg"
          >
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

      {/* Stats Section */}
      <section className="py-8 bg-gradient-to-r from-green-500 via-blue-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center transform hover:scale-110 transition-transform">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Features */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StageUp Pro?</h2>
            <p className="text-xl text-gray-600">Experience excellence in tech education</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-400 via-blue-400 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
            <p className="text-xl text-gray-600">Industry-aligned curriculum designed by experts</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-green-400 via-blue-500 to-orange-500 p-6 text-white">
                  <course.icon size={40} className="mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{course.duration}</span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{course.level}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={18} />
                      <span className="text-sm">{course.students} enrolled</span>
                    </div>
                    <div className="flex items-center gap-1 text-orange-500">
                      <Star size={18} fill="currentColor" />
                      <span className="font-semibold">4.8</span>
                    </div>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Industry Certification</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Real-world Projects</span>
                    </li>
                    <li className="flex items-start gap-2 text-gray-600">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">Placement Assistance</span>
                    </li>
                  </ul>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500">+ GST</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105">
                    Explore Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Hear from our successful graduates working at top companies</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border-4 border-orange-100" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-orange-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-orange-500" fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-orange-200 mb-2" size={32} />
                <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Our Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Placements</h2>
            <p className="text-xl text-gray-600">See where our talented students are working now</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {placements.map((placement, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 overflow-hidden border-2 border-gray-100">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-4 flex items-center justify-center h-24">
                  <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
                    <img src={placement.logo} alt={placement.company} className="h-8 object-contain" onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }} />
                    <div className="hidden items-center justify-center">
                      <Building2 size={32} className="text-orange-500" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img src={placement.image} alt={placement.name} className="w-14 h-14 rounded-full object-cover border-4 border-orange-100" />
                    <div>
                      <h4 className="font-bold text-gray-900">{placement.name}</h4>
                      <p className="text-sm text-gray-600">{placement.company}</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 text-center">
                    <div className="text-sm text-gray-600 mb-1">Package</div>
                    <div className="text-2xl font-bold text-green-600">{placement.package}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Visit us or reach out today!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Visit Us</h4>
                      <p className="text-gray-700">StageUp Pro </p>
                      <p className="text-gray-700">Singur, West Bengal, India</p>
                      <p className="text-gray-700">PIN: 712409</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                      <p className="text-gray-700">+91 1234567890</p>
                      <p className="text-gray-700">+91 0987654321</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                    <div className="bg-green-500 p-3 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-700">info@stageuppro.com</p>
                      <p className="text-gray-700">admissions@stageuppro.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl">
                    <div className="bg-purple-500 p-3 rounded-lg">
                      <Clock className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Working Hours</h4>
                      <p className="text-gray-700">Mon - Sat: 9:00 AM - 7:00 PM</p>
                      <p className="text-gray-700">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58937.71158638539!2d88.1706117!3d22.8118518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f883b54e4903df%3A0x4a5288288b2e9b4e!2sSingur%2C%20West%20Bengal%20712109!5e0!3m2!1sen!2sin!4v1735081788123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="StageUp Pro Location - Singur"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful graduates who landed their dream jobs with our comprehensive training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setShowEnrollForm(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105 flex items-center gap-2"
            >
              Start Learning Today <ChevronRight size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all"
            >
              Talk to Counselor
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-3 shadow-lg">
                    <Code className="text-white" size={28} />
                  </div>
                </div>
                <span className="text-xl font-bold text-white">StageUp Pro</span>
              </div>
              <p className="text-sm">Empowering future developers with industry-leading education and certification.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-orange-500 transition-colors">Courses</button></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Internships</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Placements</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Courses</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Full Stack Development</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Data Science</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Mobile Apps</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>Email: info@stageuppro.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Location: Singur, West Bengal, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 StageUp Pro. All rights reserved. | ISO Certified Institute</p>
          </div>
        </div>
      </footer>
    </div>
  );
}