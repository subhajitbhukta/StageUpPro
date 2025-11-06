import { Code, TrendingUp, Briefcase, CheckCircle, Building2, User, GraduationCap } from 'lucide-react';
import { useState } from 'react';

// Courses Section Component
const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState('bridge');

  
  const bridgeCourses = [
    { title: 'HTML & CSS Fundamentals (Responsive Design) ', duration: '25 to 30 Hours (1/2/3/4/5 Weeks)', students: '3.2k+', icon: Code, price: '₹3,500', maxFee: '₹6,000' },
    { title: 'Full Stack Development using Laravel with MySQL', duration: '25 to 30 Hours (1/2/3/4/5 Weeks)', students: '2.8k+', icon: Code, price: '₹4,200', maxFee: '₹7,000' },
    { title: 'Python Programming Foundation', duration: '25 to 30 Hours (1/2/3/4/5 Weeks)', students: '3.0k+', icon: Code, price: '₹4,500', maxFee: '₹7,500' },
    { title: 'Full Stack Development using MERN', duration: '25 to 30 Hours (1/2/3/4/5 Weeks)', students: '2.2k+', icon: Code, price: '₹3,000', maxFee: '₹8,000' },
    { title: 'Git & GitHub Essentials', duration: '25 to 30 Hours (1/2/3/4/5 Weeks)', students: '2.5k+', icon: TrendingUp, price: '₹2,800', maxFee: '₹6,000' },
    { title: 'UI/UX Design Introduction', duration: '25 to 30 Hours (1/2/3/4/5 Weeks)', students: '2.0k+', icon: Briefcase, price: '₹5,200', maxFee: '₹9,000' },
  ];

  const professionalCourses = [
    { title: 'Responsive Web Design Essentials', duration: '35 to 45 Hours (2/3/4/6/8 Weeks) ', students: '2.5k+', icon: Code, price: '₹7,500', maxFee: '₹12,000' },
    { title: 'Full Stack Development using Laravel with MySQL', duration: '35 to 45 Hours (2/3/4/6/8 Weeks)', students: '2.5k+', icon: Code, price: '₹15,800', maxFee: '₹25,000' },
    { title: 'Full Stack Development using MERN', duration: '35 to 45 Hours (2/3/4/6/8 Weeks)', students: '2.5k+', icon: Code, price: '₹16,100', maxFee: '₹26,000' },
    { title: 'Data Science & AI', duration: '35 to 45 Hours (2/3/4/6/8 Weeks)', students: '1.8k+', icon: TrendingUp, price: '₹18,600', maxFee: '₹30,000' },
    { title: 'Mobile App Development', duration: '35 to 45 Hours (2/3/4/6/8 Weeks)', students: '1.5k+', icon: Code, price: '₹14,800', maxFee: '₹24,000' },
    { title: 'DevOps & Cloud', duration: '35 to 45 Hours (2/3/4/6/8 Weeks)', students: '1.2k+', icon: Briefcase, price: '₹16,100', maxFee: '₹26,000' },
  ];

  const industrialCourses = [
    { title: 'Responsive Web Design Essentials', duration: '60 to 70 Hours (2/3/4/6/8/9/10/11/12 Weeks)', students: '2.5k+', icon: Code, price: '₹8,500', maxFee: '₹15,000' },
    { title: 'Full Stack Development using Laravel with MySQL', duration: '60 to 70 Hours (2/3/4/6/8/9/10/11/12 Weeks)', students: '2.5k+', icon: Code, price: '₹18,000', maxFee: '₹30,000' },
    { title: 'Full Stack Development using MERN', duration: '60 to 70 Hours (2/3/4/6/8/9/10/11/12 Weeks)', students: '2.5k+', icon: Code, price: '₹18,500', maxFee: '₹32,000' },
    { title: 'Data Science & AI', duration: '60 to 70 Hours (2/3/4/6/8/9/10/11/12 Weeks)', students: '1.8k+', icon: TrendingUp, price: '₹21,000', maxFee: '₹38,000' },
    { title: 'Mobile App Development', duration: '60 to 70 Hours (2/3/4/6/8/9/10/11/12 Weeks)', students: '1.5k+', icon: Code, price: '₹17,000', maxFee: '₹30,000' },
    { title: 'DevOps & Cloud', duration: '60 to 70 Hours (2/3/4/6/8/9/10/11/12 Weeks)', students: '1.2k+', icon: Briefcase, price: '₹18,500', maxFee: '₹32,000' },
  ];



  const bridgeAdvantages = [
    'Perfect for Beginners',
    'Short Duration & Focused Learning',
    'Affordable Entry Point',
    'Hands-on Practice Sessions',
    'Certificate of Completion'
  ];

  const professionalAdvantages = [
    'Flexible Learning Schedule',
    'Individual Attention & Mentorship',
    'Career Guidance & Resume Building',
    'Mock Interviews',
    'Industry Certification',
    'Portfolio Development Support',
    'Live Project Based Training',
  ];


  const industrialFeatures = [
    'Customized Corporate Training',
    'On-site/Online Training Options',
    'Dedicated Training Manager',
    'Skill Gap Analysis & Improvement plan',
    'Post-training Technical Support',
    'Industry-specific Case Studies',
    'Team Collaboration Projects',
    'Performance Analytics & Reports',
    'Placement Assistance Support',

  ];



  const courses = activeTab === 'professional' ? professionalCourses : activeTab === 'industrial' ? industrialCourses : bridgeCourses;
  const benefits = activeTab === 'professional' ? professionalAdvantages : activeTab === 'industrial' ? industrialFeatures : bridgeAdvantages;

  return (
    <section id="courses" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Popular Courses</h2>
          <p className="text-xl text-gray-600">Industry-aligned curriculum designed by experts</p>
        </div>


        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg w-full max-w-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <button
                onClick={() => setActiveTab('bridge')}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === 'bridge'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <GraduationCap size={20} />
                <span className="text-sm sm:text-base">Bridge Courses</span>
              </button>
              <button
                onClick={() => setActiveTab('professional')}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === 'professional'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <User size={20} />
                <span className="text-sm sm:text-base">For Professionals</span>
              </button>
              <button
                onClick={() => setActiveTab('industrial')}
                className={`flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${activeTab === 'industrial'
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900'
                  }`}
              >
                <Building2 size={20} />
                <span className="text-sm sm:text-base">For Industries</span>
              </button>
            </div>
          </div>
        </div>



        {/* Advantages/Features Banner */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {activeTab === 'professional' ? 'Professional Advantages' : activeTab === 'industrial' ? 'Industrial Training Features' : 'Bridge Course Benefits'}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="bg-orange-500/80 p-6 text-white">
                <course.icon size={40} className="mb-4" />
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">{course.duration}</span>
                </div>
              </div>
              <div className="p-6">
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
                <div className="mb-4">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-2xl text-gray-400 line-through">{course.maxFee}</span>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-lg text-xs font-semibold">
                      {Math.round(((parseFloat(course.maxFee.replace('₹', '').replace(',', '')) - parseFloat(course.price.replace('₹', '').replace(',', ''))) / parseFloat(course.maxFee.replace('₹', '').replace(',', ''))) * 100)}% OFF
                    </span>
                  </div>
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500 mb-1">+ GST</span>
                  </div>
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
  );
};

export default CoursesSection;