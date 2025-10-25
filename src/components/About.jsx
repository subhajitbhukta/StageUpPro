import { Award, Users, Briefcase, BookOpen, Star, Quote, Building2 } from 'lucide-react';

// About Section Component
const AboutSection = () => {
  const features = [
    { icon: Award, title: 'ISO Certified', desc: 'Internationally recognized certification' },
    { icon: Users, title: '10+ Years Experience', desc: 'Trusted by thousands of students' },
    { icon: Briefcase, title: 'Real Projects', desc: 'Work on live industry projects' },
    { icon: BookOpen, title: 'Expert Mentors', desc: 'Learn from industry professionals' }
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
    }
  ];

  const placements = [
    { name: 'Rahul Sharma', company: 'Google', logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png', package: '₹18 LPA', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop' },
    { name: 'Priya Patel', company: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', package: '₹16 LPA', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop' },
    { name: 'Amit Kumar', company: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg', package: '₹20 LPA', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop' },
    { name: 'Sneha Reddy', company: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Flipkart-logo.png', package: '₹14 LPA', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop' }
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
    </>
  );
};
export default AboutSection;