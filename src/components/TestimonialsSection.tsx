
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah J.',
    image: 'https://randomuser.me/api/portraits/women/12.jpg',
    stars: 5,
    text: 'Luna has transformed how I understand my body. The AI insights are incredibly accurate, and I love how the interface changes based on my cycle phase!',
    location: 'London, UK'
  },
  {
    name: 'Maya T.',
    image: 'https://randomuser.me/api/portraits/women/36.jpg',
    stars: 5,
    text: 'As someone with PCOS, the pattern recognition feature has been a game-changer. It detected irregularities that led to an early diagnosis.',
    location: 'Toronto, Canada'
  },
  {
    name: 'Aisha M.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    stars: 5,
    text: 'I love that I can access healthcare professionals remotely. The virtual consultations have saved me so much time and anxiety.',
    location: 'Dubai, UAE'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Real Women, Real Experiences
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Hear from our community about how Luna has transformed their wellness journey.
            </p>
            
            <div className="bg-luna-lavender/30 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Community Impact</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold gradient-text">10,000+</p>
                  <p className="text-sm text-gray-600">Trees Planted</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold gradient-text">500,000+</p>
                  <p className="text-sm text-gray-600">Active Users</p>
                </div>
              </div>
              <p className="text-gray-700">
                For every wellness milestone you reach, Luna plants a tree. Join our community and make a difference for your health and the planet.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fade-in 0.5s ease-out forwards',
                  opacity: 0
                }}
              >
                <div className="flex items-center gap-4 mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
