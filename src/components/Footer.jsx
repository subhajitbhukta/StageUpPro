import { MapPin, Phone, Mail, Clock, ChevronRight, Code } from "lucide-react";
import logo from '../assets/darkstageup_pro_logo.png'
// Footer Component
const Footer = ({ scrollToSection }) => {
  return (
    <>
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you. Visit us or reach out today!</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
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
                      <p className="text-gray-700">StageUp</p>
                      <p className="text-gray-700">Mankundu, West Bengal, India</p>
                      <p className="text-gray-700">PIN: 712139</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                    <div className="bg-blue-500 p-3 rounded-lg">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                      <span className="text-gray-700">+91 9123378405 , </span>
                      <span className="text-gray-700">+91 9681456344</span>
                      <p className="text-gray-700">+91 9804325454</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                    <div className="bg-green-500 p-3 rounded-lg">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Email Us</h4>
                      <p className="text-gray-700"> letsstageupnow@gmail.com</p>
                      {/* <p className="text-gray-700">admissions@stageuppro.com</p> */}
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

            <div className="space-y-6">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58898.3275307223!2d88.2673864!3d22.829177800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f464b84fd9b%3A0x8b4e00126ae33aa1!2sMankundu%2C%20West%20Bengal%20712139!5e0!3m2!1sen!2sin!4v1735085412223!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="StageUp Pro Location - Mankundu"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of successful graduates who landed their dream jobs with our comprehensive training programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
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

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-3">
                <img src={logo} alt="StageUp Pro" className="h-14" />
              </div>
              <p className="text-sm">Empowering future developers with industry - leading education and certification.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition-colors">About Us</button></li>
                <li><button onClick={() => scrollToSection('courses')} className="hover:text-orange-500 transition-colors">Courses</button></li>
                {/* <li><a href="#" className="hover:text-orange-500 transition-colors">Internships</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Placements</a></li> */}
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
                <li>Email:  letsstageupnow@gmail.com</li>
                <li>Phone: +91 9681456344 , +91 9123378405</li>
                <li>Location: Mankundu West Bengal, India</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 StageUp Pro. All rights reserved. | ISO Certified Institute</p>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;