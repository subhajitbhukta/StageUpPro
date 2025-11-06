import { Award, Users, Briefcase, BookOpen, Star, Quote, Building2 } from 'lucide-react';
import img1 from '../assets/las.png';
import img2 from '../assets/med.jpeg';

// About Section Component
const AboutSection = () => {
  const features = [
    { icon: Award, title: 'ISO Certified', desc: 'Internationally recognized certification' },
    { icon: Users, title: '3+ Years Experience', desc: 'Trusted by ambitious learners' },
    { icon: Briefcase, title: 'Real Projects', desc: 'Work on live industry projects' },
    { icon: BookOpen, title: 'Expert Mentors', desc: 'Learn from industry professionals' }
  ];

  const testimonials = [
    {
      name: 'LakshmiKanta Patra',
      role: 'Full Stack Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png',
      text: 'StageUp Pro gave me the exact skills that industry actually wants. The mentors here genuinely guide you like family — they clearly say what is bad and what is good. I became confident and job-ready.',
      // rating: 4.8
    },
    {
      name: 'Abhijit Debnath',
      role: 'Node.Js Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png',
      text: 'Here learning is fully practical. They don’t just “teach syllabus”, they push you to build real projects. This helped me start my career faster than I expected. Real mentors, real learning.',
      // rating: 5
    },
    {
      name: 'Medhashis Maity',
      role: 'Software Developer',
      image: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png',
      text: 'What I loved most is the honesty — mentors tell the truth. If something is wrong, they say it directly without sugarcoat. That feedback changed my skill level completely. Perfect place to start your journey.',
      // rating: 5
    }
  ];


  const placements = [
    { name: 'Abhijit Debnath', company: 'Web Skitters', logo: 'https://www.webskitters.com/wp-content/uploads/2025/02/WTS-LOGO-COLOR-01-3.png', package: '₹3.6 LPA', image: 'https://cdn-icons-png.flaticon.com/512/6522/6522516.png' },
    { name: 'LakshmiKanta Patra', company: 'Vxplore Technologies', logo: 'https://www.topdevelopers.co/upload/20231205073153737598876.png', package: '₹4 LPA', image:img1 },
    { name: 'Medhashis Maity', company: 'Aarushi Infotech', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrid2HbRdLFlr6hP0hm1LjIag2BZddIaBUkQ&s', package: '₹3.6 LPA', image: img2 },
  ];

  return (
    <>
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StageUp Pro?</h2>
            <p className="text-xl text-gray-600">Experience excellence in tech education</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="bg-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                {/* <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-orange-500" fill="currentColor" />
                  ))}
                </div> */}
                <Quote className="text-orange-200 mb-2" size={32} />
                <p className="text-gray-700 italic leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
              Our Success Stories
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Recent Placements</h2>
            <p className="text-xl text-gray-600">See where our talented students are working now</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    </>
  );
};
export default AboutSection;