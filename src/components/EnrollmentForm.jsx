import React, { useState } from 'react';
import {X,Send, Code, Award, Briefcase, TrendingUp, Globe } from 'lucide-react';

const EnrollmentForm = ({ showForm, onClose }) => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for enrolling! Our team will contact you soon.');
    onClose();
    setFormData({ name: '', email: '', phone: '', course: '', message: '' });
  };

   const courses = [
    { title: 'Full Stack Development using PHP and MySQL', duration: '30 to 40 Hours', level: 'Advanced', students: '2.5k+', icon: Code, price: '₹49,999' },
    { title: 'Full Stack Development using PHP with Laravel', duration: '30 to 40 Hours', level: 'Intermediate', students: '1.8k+', icon: TrendingUp, price: '₹44,999' },
    { title: 'Full Stack Development using MERN', duration: '30 to 40 Hours', level: 'Beginner', students: '3.2k+', icon: Globe, price: '₹34,999' },
    { title: 'Data Science & AI', duration: '30 to 40 Hours', level: 'Intermediate', students: '1.5k+', icon: Code, price: '₹39,999' },
    { title: 'Mobile App Development', duration: '30 to 40 Hours', level: 'Advanced', students: '1.2k+', icon: Briefcase, price: '₹42,999' },
    // { title: 'Cybersecurity', duration: '6 Months', level: 'Advanced', students: '980+', icon: Award, price: '₹54,999' }
  ];

  if (!showForm) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 text-white relative">
          <button
            onClick={onClose}
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
  );
};
export default EnrollmentForm;