
import React from 'react';
import { 
  Calendar, 
  CloudSun, 
  Phone, 
  Activity, 
  TreeDeciduous, 
  Book, 
  Sun, 
  Users, 
  Watch, 
  AlertCircle 
} from 'lucide-react';

const features = [
  {
    title: 'Menstrual Cycle & Fertility Tracking',
    description: 'AI-powered insights for period, ovulation, and fertility predictions.',
    icon: Calendar
  },
  {
    title: 'Weather-Based Menstrual Insights',
    description: 'Understand how climate affects your cycle and wellness.',
    icon: CloudSun
  },
  {
    title: 'Virtual Gynecologist Consultations',
    description: 'Speak to certified professionals from anywhere, securely.',
    icon: Phone
  },
  {
    title: 'AI-Powered Diet & Exercise Plans',
    description: 'Personalized recommendations tailored to cycle phases.',
    icon: Activity
  },
  {
    title: 'Gamified Wellness Milestones',
    description: 'Earn points towards sustainability with our tree-planting program.',
    icon: TreeDeciduous
  },
  {
    title: 'Interactive Period Story Mode',
    description: 'Fun, gamified learning for young users.',
    icon: Book
  },
  {
    title: 'Hormone-Responsive UI Themes',
    description: 'Adaptive design based on your cycle phase.',
    icon: Sun
  },
  {
    title: 'Community Support & Forums',
    description: 'A safe, anonymous space to discuss health concerns.',
    icon: Users
  },
  {
    title: 'Wearable Integration',
    description: 'Sync with Fitbit, Apple Watch, or Oura for deep health tracking.',
    icon: Watch
  },
  {
    title: 'AI Symptom Pattern Recognition',
    description: 'Detect irregularities and receive early health warnings.',
    icon: AlertCircle
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">What Luna Offers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive suite of features designed to support your wellness journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card group"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animation: 'fade-in 0.5s ease-out forwards',
                opacity: 0
              }}
            >
              <div className="feature-icon-wrapper">
                <feature.icon className="h-7 w-7 text-luna-purple" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-luna-purple transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
