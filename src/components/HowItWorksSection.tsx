
import React from 'react';
import { ArrowRight, Mic, Brain, Phone, Award } from 'lucide-react';

const steps = [
  {
    number: 1,
    title: 'Log Your Cycle',
    description: 'Use voice commands or our intuitive interface to track your cycle, symptoms, and mood.',
    icon: Mic,
    color: 'bg-luna-lavender'
  },
  {
    number: 2,
    title: 'Receive AI Insights',
    description: 'Get personalized health recommendations and cycle predictions powered by AI.',
    icon: Brain,
    color: 'bg-luna-peach'
  },
  {
    number: 3,
    title: 'Access Support',
    description: 'Connect with healthcare professionals and community members for guidance.',
    icon: Phone,
    color: 'bg-luna-teal'
  },
  {
    number: 4,
    title: 'Track Progress',
    description: 'Monitor your wellness milestones and earn rewards through gamification.',
    icon: Award,
    color: 'bg-luna-pink'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-luna-lavender/20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">How Luna Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your journey to better health is just a few simple steps away.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="how-it-works-card group"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="how-it-works-number">{step.number}</div>
              <div className={`p-4 rounded-full ${step.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-luna-purple" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
