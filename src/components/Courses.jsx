import { Code, TrendingUp, Globe, Briefcase, Award, Users, Star, CheckCircle } from 'lucide-react';

// Courses Section Component
const CoursesSection = () => {
  const courses = [
    { title: 'Full Stack Development', duration: '6 Months', level: 'Advanced', students: '2.5k+', icon: Code, price: '₹49,999' },
    { title: 'Data Science & AI', duration: '5 Months', level: 'Intermediate', students: '1.8k+', icon: TrendingUp, price: '₹44,999' },
    { title: 'Web Development', duration: '4 Months', level: 'Beginner', students: '3.2k+', icon: Globe, price: '₹34,999' },
    { title: 'Mobile App Development', duration: '5 Months', level: 'Intermediate', students: '1.5k+', icon: Code, price: '₹39,999' },
    { title: 'DevOps & Cloud', duration: '4 Months', level: 'Advanced', students: '1.2k+', icon: Briefcase, price: '₹42,999' },
    { title: 'Cybersecurity', duration: '6 Months', level: 'Advanced', students: '980+', icon: Award, price: '₹54,999' }
  ];

  return (
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
  );
};
export default CoursesSection;